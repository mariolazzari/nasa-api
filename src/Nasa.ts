import Apod from './types/apod/Apod';
import Catalog from './types/donki/Catalog';
import CoronalMassEjection from './types/donki/CoronalMassEjection';
import CoronalMassEjectionAnalysis from './types/donki/CoronalMassEjectionAnalysis';
import GeomagneticStorm from './types/donki/GeomagneticStorm';
import HightSpeedStream from './types/donki/HightSpeedStream';
import InterplanetaryShock from './types/donki/InterplanetaryShock';
import Location from './types/donki/Location';
import MagnetopauseCrossing from './types/donki/MagnetopauseCrossing';
import Notification from './types/donki/Notification';
import NotificationType from './types/donki/NotificationType';
import RadiationBeltEnhancement from './types/donki/RadiationBeltEnhancement';
import SolarEnergeticParticle from './types/donki/SolarEnergeticParticle';
import SolarFlare from './types/donki/SolarFlare';
import WsaEnlilSimulation from './types/donki/WsaEnlilSimulation';
import Link from './types/Link';
import Camera from './types/mars/Camera';
import Neo from './types/neo/Neo';
import NeoResponse from './types/neo/NeroResponse';
import { Result } from './types/Result';
import { formatDate, getNow, getLastWeek, getLastMonth } from './utils/dates';

export class Nasa {
  private readonly apiKey: string;
  private baseUrl = 'https://api.nasa.gov' as const;
  private apodUrl = '/planetary/apod' as const;
  private neoUrl = '/neo/rest/v1' as const;
  private donkiUrl = '/DONKI' as const;
  // private earthUrl = '/planetary/earth' as const;
  // private eonetUrl = 'https://eonet.gsfc.nasa.gov/api/v3' as const;

  private roverCameras: Camera[] = [
    {
      code: 'FHAZ',
      description: 'Front Hazard Avoidance Camera',
      curiosity: true,
      opportunity: true,
      spirit: true,
    },
    {
      code: 'RHAZ',
      description: 'Rear Hazard Avoidance Camera',
      curiosity: true,
      opportunity: true,
      spirit: true,
    },
    {
      code: 'MAST',
      description: 'Mast Camera',
      curiosity: true,
    },
    {
      code: 'CHEMCAM',
      description: 'Chemistry and Camera Complex',
      curiosity: true,
    },
  ];

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async fetchData<T>(url: string, qs: string = ''): Promise<Result<T>> {
    try {
      // api call
      const res = await fetch(
        `${this.baseUrl}${url}?api_key=${this.apiKey}${qs}`
      );

      // check errors
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      // cast response
      const data: T = await res.json();

      // success
      return {
        success: true,
        data,
      };
    } catch (ex) {
      // error
      const error = ex instanceof Error ? ex.message : 'Internal server error';

      return {
        success: false,
        error,
      };
    }
  }

  private isThumbs(qs: string, thumbs: boolean) {
    if (thumbs) {
      return `${qs}&thumbs=true`;
    }
    return qs;
  }

  // Apod
  public async apodDate(
    date = getNow(),
    thumbs: boolean = false
  ): Promise<Result<Apod>> {
    let qs: string = `&date=${formatDate(date)}`;
    qs = this.isThumbs(qs, thumbs);

    return await this.fetchData<Apod>(this.apodUrl, qs);
  }

  public async apodDates(
    from: Date = new Date(),
    to: Date = new Date(),
    thumbs: boolean = false
  ): Promise<Result<Apod[]>> {
    let qs: string = `&start_date=${formatDate(from)}`;
    qs += `&end_date=${formatDate(to)}`;
    qs = this.isThumbs(qs, thumbs);

    return await this.fetchData<Apod[]>(this.apodUrl, qs);
  }

  public async apodRandom(count = 10, thumbs = false): Promise<Result<Apod[]>> {
    let qs: string = `&count=${count}`;
    qs = this.isThumbs(qs, thumbs);

    return await this.fetchData<Apod[]>(this.apodUrl, qs);
  }

  // Neo
  public async neoFeed(from = getLastWeek(), to = getNow()) {
    let qs: string = `&start_date=${formatDate(from)}`;
    qs += `&end_date=${formatDate(to)}`;

    return await this.fetchData<NeoResponse>(`${this.neoUrl}/feed`, qs);
  }

  public async neoLookup(asteroidId: number) {
    const url = `${this.neoUrl}/neo/${asteroidId}`;

    return await this.fetchData<Neo & Link>(url);
  }

  // Donki
  public async donkiCme(from = getLastMonth(), to = getNow()) {
    let qs: string = `&start_date=${formatDate(from)}`;
    qs += `&end_date=${formatDate(to)}`;

    return await this.fetchData<CoronalMassEjection[]>(
      `${this.donkiUrl}/CME`,
      qs
    );
  }

  public async donkiCmeAnalysis(
    from = getLastMonth(),
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

  public async donkiGst(from = getLastMonth(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<GeomagneticStorm[]>(`${this.donkiUrl}/GST`, qs);
  }

  public async donkiIps(
    from = getLastMonth(),
    to = getNow(),
    location: Location = 'ALL',
    catalog: Catalog = 'ALL'
  ) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(
      to
    )}&location=${location}&catalog=${catalog}`;

    return await this.fetchData<InterplanetaryShock[]>(
      `${this.donkiUrl}/IPS`,
      qs
    );
  }

  public async donkiFlr(from = getLastMonth(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<SolarFlare[]>(`${this.donkiUrl}/FLR`, qs);
  }

  public async donkiSep(from = getLastMonth(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<SolarEnergeticParticle[]>(
      `${this.donkiUrl}/SEP`,
      qs
    );
  }

  public async donkiMpc(from = getLastMonth(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<MagnetopauseCrossing[]>(
      `${this.donkiUrl}/MPC`,
      qs
    );
  }

  public async donkiRbe(from = getLastMonth(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<RadiationBeltEnhancement[]>(
      `${this.donkiUrl}/RBE`,
      qs
    );
  }

  public async donkiHss(from = getLastMonth(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<HightSpeedStream[]>(`${this.donkiUrl}/HSS`, qs);
  }

  public async donkiWsa(from = getLastMonth(), to = getNow()) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(to)}`;

    return await this.fetchData<WsaEnlilSimulation[]>(
      `${this.donkiUrl}/WSAEnlilSimulations`,
      qs
    );
  }

  public async donkiNotifications(
    from = getLastMonth(),
    to = getNow(),
    type: NotificationType = 'all'
  ) {
    const qs = `&start_date=${formatDate(from)}&end_date=${formatDate(
      to
    )}&type=${type}`;

    return await this.fetchData<Notification[]>(
      `${this.donkiUrl}/notifications`,
      qs
    );
  }

  // earth

  // TODO: service unavable?

  /*
  public async earthImagery(
    lat: number,
    lon: number,
    dim = 0.025,
    date = getNow(),
    cloudeScore = false
  ) {
    const qs = `&lat=${lat}&lon=${lon}&dim=${dim}&date=${formatDate(
      date
    )}&cloude_score=${cloudeScore}`;

    return await this.fetchData<Notification[]>(`${this.donkiUrl}/imagery`, qs);
  }*/

  // Eonet

  public async eonetEvents() {}

  // Mars rover photos
  public marsCameras = () => {
    const result: Result<Camera[]> = {
      success: true,
      data: this.roverCameras,
    };

    return result;
  };
}

export default Nasa;
