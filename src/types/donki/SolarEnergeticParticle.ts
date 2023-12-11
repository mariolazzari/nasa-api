import Instrument from './Instrument';
import Event from './Event';

export type SolarEnergeticParticle = {
  sepID: string;
  eventTime: string;
  instruments?: Instrument[];
  linkedEvents?: Event[];
  link: string;
};

export default SolarEnergeticParticle;
