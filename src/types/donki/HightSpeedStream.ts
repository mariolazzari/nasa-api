import Instrument from './Instrument';
import Event from './Event';

export type HightSpeedStream = {
  hssID: string;
  eventTime: '2016-01-11T12:00Z';
  instruments: Instrument[];
  linkedEvents?: Event[];
  link: string;
};

export default HightSpeedStream;
