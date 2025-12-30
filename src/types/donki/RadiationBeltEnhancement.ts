import Event from "./Event";
import { Instrument } from "./Instrument";

export type RadiationBeltEnhancement = {
  rbeID: string;
  eventTime: string;
  instruments?: Instrument[];
  linkedEvents?: Event[];
  link: string;
};

export default RadiationBeltEnhancement;
