import Impact from './Impact';

export type Enlil = {
  modelCompletionTime: string;
  au: number;
  estimatedShockArrivalTime?: string;
  estimatedDuration?: string;
  rmin_re?: string;
  kp_18?: string;
  kp_90?: string;
  kp_135?: string;
  kp_180?: string;
  isEarthGB: boolean;
  link: string;
  impactList?: Impact[];
  cmeIDs: string[];
};

export default Enlil;
