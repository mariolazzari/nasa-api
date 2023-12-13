import Parameter from './Parameter';

export type Layer = {
  name: string;
  serviceUrl: string;
  serviceTypeId: string;
  parameters: Parameter[];
};

export default Layer;
