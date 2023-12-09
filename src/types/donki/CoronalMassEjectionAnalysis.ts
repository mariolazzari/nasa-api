import Enlil from './Enlil';

export type CoronalMassEjectionAnalysis = {
  time21_5: string;
  latitude: number;
  longitude: number;
  halfAngle: number;
  speed: number;
  type: string;
  isMostAccurate: boolean;
  note: string;
  levelOfData: number;
  link: string;
  enlilList: Enlil[];
};

export default CoronalMassEjectionAnalysis;
