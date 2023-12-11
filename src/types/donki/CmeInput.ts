import InterplanetaryShock from './InterplanetaryShock';

export type CmeInput = {
  cmeStartTime: string;
  latitude: number;
  longitude: number;
  speed: number;
  halfAngle: number;
  time21_5: string;
  isMostAccurate: boolean;
  levelOfData: number;
  ipsList: InterplanetaryShock[];
  cmeid: string;
};

export default CmeInput;
