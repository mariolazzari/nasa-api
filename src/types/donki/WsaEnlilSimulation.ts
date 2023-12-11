import CmeInput from './CmeInput';
import Impact from './Impact';

export type WsaEnlilSimulation = {
  simulationID: string;
  modelCompletionTime: string;
  au: number;
  cmeInputs: CmeInput[];
  estimatedShockArrivalTime?: string;
  estimatedDuration?: string;
  rmin_re?: string;
  kp_18?: string;
  kp_90?: string;
  kp_135?: string;
  kp_180?: string;
  isEarthGB: boolean;
  impactList: Impact[];
  link: string;
};

export default WsaEnlilSimulation;
