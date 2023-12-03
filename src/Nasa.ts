import ApodRequest from './types/ApodRequest';
import ApodResponse from './types/ApodResponse';
import Result from './types/Result';

export class Nasa {
  private baseUrl = 'https://api.nasa.gov';
  private apiKey = '';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async fetchData<T>(url: string, qs: string = '') {
    let result: Result<T> = {
      success: false,
    };

    try {
      const res = await fetch(
        `${this.baseUrl}${url}?api_key=${this.apiKey}${qs}`
      );
      if (res.ok) {
        const data: T = await res.json();
        result.data = data;
        result.success = true;
      } else {
        result.error = res.statusText;
      }
    } catch (ex) {
      if (ex instanceof Error) {
        result.error = ex.message;
      } else {
        result.error = 'Internal server error';
      }
    } finally {
      return result;
    }
  }

  // Nasa picture of the day
  public async apod({
    date,
    start_date,
    end_date,
    count,
    thumbs = false,
  }: ApodRequest = {}) {
    let qs = `&thumbs=${thumbs}`;

    switch (true) {
      case !!date:
        qs += `&date=${date}`;
        break;

      case !date && !!start_date && !!end_date:
        qs += `&start_date=${start_date}&end_date=${end_date}`;
        break;

      case !date && !start_date && !end_date && !!count:
        qs += `&count=${count}`;
        break;
    }

    const res = await this.fetchData<ApodResponse>('/planetary/apod', qs);

    return res;
  }
}

export default Nasa;
