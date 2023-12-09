import KpIndex from './KpIndex';
import Event from './Event';

export type GeomagneticStorm = {
  gstID: string;
  startTime: string;
  allKpIndex: KpIndex[];
  linkedEvents: Event[];
  link: string;
};
