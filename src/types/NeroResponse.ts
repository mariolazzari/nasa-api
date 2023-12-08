import { Neo } from './Neo';

export type NeoResponse = {
  links: {
    next: string;
    previous: string;
    self: string;
  };
  element_count: number;
  near_earth_objects: Record<string, Neo[]>;
};

export default NeoResponse;
