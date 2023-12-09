import CloseApproach from './CloseApproach';
import Diameter from './DIameter';
import Link from '../Link';
import { OrbitalData } from './OrbitalData';

// Near Earth bject
export type Neo = {
  links: Link;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: Diameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproach[];
  orbital_data?: OrbitalData;
  is_sentry_object: false;
};

export default Neo;
