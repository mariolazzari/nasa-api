import Response from './Response';
import Event from './Event';

export type EventsResponse = Response & {
  events: Event[];
};

export default EventsResponse;
