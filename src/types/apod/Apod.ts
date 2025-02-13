import MediaType from './MediaType';

export type Apod = {
  copyright: string;
  date: string;
  explanation: string;
  media_type: MediaType;
  service_version: string;
  title: string;
  url: string;
  hdurl: string;
};

export default Apod;
