import CameraCode from './CameraCode';

export type Camera = {
  code: CameraCode;
  description: string;
  curiosity?: boolean;
  opportunity?: boolean;
  spirit?: boolean;
};

export default Camera;
