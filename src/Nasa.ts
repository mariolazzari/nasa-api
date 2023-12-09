import Apod from './types/apod/Apod';
import CoronalMassEjection from './types/donki/CoronalMassEjection';
import CoronalMassEjectionAnalysis from './types/donki/CoronalMassEjectionAnalysis';
import { GeomagneticStorm } from './types/donki/GeomagneticStorm';
import Link from './types/Link';
import Neo from './types/neo/Neo';
import NeoResponse from './types/neo/NeroResponse';
import Result from './types/Result';
import { formatDate, getLast30, getNow } from './utils';

export class Nasa {
  private readonly apiKey: string;
  private baseUrl = 'https://api.nasa.gov' as const;
  private apodUrl = '/planetary/apod' as const;
  private neoUrl = '/neo/rest/v1' as const;
  private donkiUrl = '/DONKI' as const;

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

  // Donki

  public async donkiCme(from = getLast30(), to = getNow()) {
    let qs: string = `&start_date=${formatDate(from)}`;
    qs += `&end_date=${formatDate(to)}`;

    return await this.fetchData<CoronalMassEjection[]>(
      `${this.donkiUrl}/CME`,
      qs
    );
  }

  public async donkiCmeAnalysis(
    from = getLast30(),
    to = getNow(),
    mostAccurateOnly = true,
    completeEntryOnly = true,
    speed = 0
  ) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(
      to
    )}&mostAccurateOnly=${mostAccurateOnly}&completeEntryOnly=${completeEntryOnly}&speed=${speed}`;

    return await this.fetchData<CoronalMassEjectionAnalysis[]>(
      `${this.donkiUrl}/CMEAnalysis`,
      qs
    );
  }

  public async donkiGst(from = getLast30(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<GeomagneticStorm[]>(`${this.donkiUrl}/GST`, qs);
  }
}

export default Nasa;
