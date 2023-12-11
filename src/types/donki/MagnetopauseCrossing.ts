import Instrument from './Instrument';
import Event from './Event';

export type MagnetopauseCrossing = {
  mpcID: string;
  eventTime: string;
  instruments?: Instrument[];
  linkedEvents?: Event[];
  link: string;
};

export default Instrument;
