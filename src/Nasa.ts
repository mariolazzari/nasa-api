import Apod from './types/Apod';
import Link from './types/Link';
import Neo from './types/Neo';
import NeoResponse from './types/NeroResponse';
import Result from './types/Result';
import { formatDate } from './utils';

export class Nasa {
  private readonly apiKey: string;
  private baseUrl = 'https://api.nasa.gov' as const;
  private apodUrl = '/planetary/apod' as const;
  private neoUrl = '/neo/rest/v1' as const;

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

  private isThumbs(qs: string, thumbs: boolean) {
    if (thumbs) {
      return `${qs}&thumbs=true`;
    }
    return qs;
  }

  // Apod

  public async apodDate(date: Date = new Date(), thumbs: boolean = false) {
    let qs: string = `&date=${formatDate(date)}`;
    qs = this.isThumbs(qs, thumbs);

    return await this.fetchData<Apod>(this.apodUrl, qs);
  }

  public async apodDates(
    from: Date = new Date(),
    to: Date = new Date(),
    thumbs: boolean = false
  ) {
    let qs: string = `&start_date=${formatDate(from)}`;
    qs += `&end_date=${formatDate(to)}`;
    qs = this.isThumbs(qs, thumbs);

    return await this.fetchData<Apod[]>(this.apodUrl, qs);
  }

  public async apodRandom(count: number = 1, thumbs: boolean = false) {
    let qs: string = `&count=${count}`;
    qs = this.isThumbs(qs, thumbs);

    return await this.fetchData<Apod[]>(this.apodUrl, qs);
  }

  // Neo

  public async neoFeed(from: Date = new Date(), to: Date = new Date()) {
    let qs: string = `&start_date=${formatDate(from)}`;
    qs += `&end_date=${formatDate(to)}`;

    return await this.fetchData<NeoResponse>(`${this.neoUrl}/feed`, qs);
  }

  public async neoLookup(asteroidId: number) {
    const url = `${this.neoUrl}/neo/${asteroidId}`;

    return await this.fetchData<Neo & Link>(url);
  }
}

export default Nasa;
