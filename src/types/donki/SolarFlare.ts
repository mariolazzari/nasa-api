import Instrument from './Instrument';
import Event from './Event';

export type SolarFlare = {
  flrID: string;
  instruments?: Instrument[];
  beginTime: string;
  peakTime: string;
  endTime?: string;
  classType: string;
  sourceLocation: string;
  activeRegionNum: number;
  linkedEvents?: Event[];
  link: string;
};

export default SolarFlare;
