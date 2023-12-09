import Link from '../Link';
import Neo from './Neo';

export type NeoResponse = {
  links: Link;
  element_count?: number;
  near_earth_objects: Record<string, Neo[]>;
};

export default NeoResponse;
