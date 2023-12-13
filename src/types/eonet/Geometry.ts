export type Geometry = {
  magnitudeValue: number;
  magnitudeUnit: string;
  date: string;
  type: 'Point' | 'Polygon';
  coordinates: [number, number];
};

export default Geometry;
