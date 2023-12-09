import Distance from '../Distance';
import Velocity from '../Velocity';

export type CloseApproach = {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: Velocity;
  miss_distance: Distance;
  orbiting_body: string;
};

export default CloseApproach;
