import CoronalMassEjectionAnalysis from './CoronalMassEjectionAnalysis';
import Instrument from './Instrument';

export type CoronalMassEjection = {
  activityID: string;
  catalog: string;
  startTime: string;
  sourceLocation: string;
  activeRegionNum?: string;
  link: string;
  note: string;
  instruments?: Instrument[];
  cmeAnalyses: CoronalMassEjectionAnalysis[];
  linkedEvents?: string;
};

export default CoronalMassEjection;
