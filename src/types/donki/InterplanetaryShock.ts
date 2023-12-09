import Catalog from './Catalog';
import Instrument from './Instrument';

export type InterplanetaryShock = {
  catalog: Catalog;
  activityID: string;
  location: Location;
  eventTime: string;
  link: string;
  instruments: Instrument[];
};

export default InterplanetaryShock;
