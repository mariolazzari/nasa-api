import Category from './Category';
import Source from './Source';

export type Event = {
  id: string;
  title: string;
  description?: string;
  link: string;
  closed: null;
  categories: Category[];
  sources: Source[];
  geometry: [
    {
      magnitudeValue: 35.0;
      magnitudeUnit: 'kts';
      date: '2023-12-05T00:00:00Z';
      type: 'Point';
      coordinates: [157.2, -9.3];
    },
    {
      magnitudeValue: 40.0;
      magnitudeUnit: 'kts';
      date: '2023-12-05T06:00:00Z';
      type: 'Point';
      coordinates: [156.9, -9.4];
    },
    {
      magnitudeValue: 45.0;
      magnitudeUnit: 'kts';
      date: '2023-12-05T12:00:00Z';
      type: 'Point';
      coordinates: [157.3, -9.5];
    },
    {
      magnitudeValue: 55.0;
      magnitudeUnit: 'kts';
      date: '2023-12-05T18:00:00Z';
      type: 'Point';
      coordinates: [157.4, -10.2];
    },
    {
      magnitudeValue: 65.0;
      magnitudeUnit: 'kts';
      date: '2023-12-06T00:00:00Z';
      type: 'Point';
      coordinates: [157.3, -10.7];
    },
    {
      magnitudeValue: 70.0;
      magnitudeUnit: 'kts';
      date: '2023-12-06T06:00:00Z';
      type: 'Point';
      coordinates: [157.2, -11.2];
    },
    {
      magnitudeValue: 75.0;
      magnitudeUnit: 'kts';
      date: '2023-12-06T12:00:00Z';
      type: 'Point';
      coordinates: [157.1, -11.6];
    },
    {
      magnitudeValue: 75.0;
      magnitudeUnit: 'kts';
      date: '2023-12-06T18:00:00Z';
      type: 'Point';
      coordinates: [157.1, -11.7];
    },
    {
      magnitudeValue: 85.0;
      magnitudeUnit: 'kts';
      date: '2023-12-07T00:00:00Z';
      type: 'Point';
      coordinates: [156.8, -12.1];
    },
    {
      magnitudeValue: 90.0;
      magnitudeUnit: 'kts';
      date: '2023-12-07T06:00:00Z';
      type: 'Point';
      coordinates: [156.8, -12.8];
    },
    {
      magnitudeValue: 95.0;
      magnitudeUnit: 'kts';
      date: '2023-12-07T12:00:00Z';
      type: 'Point';
      coordinates: [156.7, -13.1];
    },
    {
      magnitudeValue: 105.0;
      magnitudeUnit: 'kts';
      date: '2023-12-07T18:00:00Z';
      type: 'Point';
      coordinates: [156.7, -13.8];
    },
    {
      magnitudeValue: 120.0;
      magnitudeUnit: 'kts';
      date: '2023-12-08T00:00:00Z';
      type: 'Point';
      coordinates: [156.6, -14.2];
    },
    {
      magnitudeValue: 115.0;
      magnitudeUnit: 'kts';
      date: '2023-12-08T06:00:00Z';
      type: 'Point';
      coordinates: [156.5, -14.5];
    },
    {
      magnitudeValue: 110.0;
      magnitudeUnit: 'kts';
      date: '2023-12-08T12:00:00Z';
      type: 'Point';
      coordinates: [156.5, -15];
    },
    {
      magnitudeValue: 95.0;
      magnitudeUnit: 'kts';
      date: '2023-12-08T18:00:00Z';
      type: 'Point';
      coordinates: [156.4, -15.3];
    },
    {
      magnitudeValue: 90.0;
      magnitudeUnit: 'kts';
      date: '2023-12-09T00:00:00Z';
      type: 'Point';
      coordinates: [155.8, -15.4];
    },
    {
      magnitudeValue: 80.0;
      magnitudeUnit: 'kts';
      date: '2023-12-09T06:00:00Z';
      type: 'Point';
      coordinates: [155.5, -16];
    },
    {
      magnitudeValue: 70.0;
      magnitudeUnit: 'kts';
      date: '2023-12-09T12:00:00Z';
      type: 'Point';
      coordinates: [155.2, -15.8];
    },
    {
      magnitudeValue: 60.0;
      magnitudeUnit: 'kts';
      date: '2023-12-09T18:00:00Z';
      type: 'Point';
      coordinates: [154.9, -15.9];
    },
    {
      magnitudeValue: 55.0;
      magnitudeUnit: 'kts';
      date: '2023-12-10T00:00:00Z';
      type: 'Point';
      coordinates: [154.2, -16.1];
    },
    {
      magnitudeValue: 55.0;
      magnitudeUnit: 'kts';
      date: '2023-12-10T06:00:00Z';
      type: 'Point';
      coordinates: [154, -16.1];
    },
    {
      magnitudeValue: 50.0;
      magnitudeUnit: 'kts';
      date: '2023-12-10T12:00:00Z';
      type: 'Point';
      coordinates: [152.9, -17.5];
    },
    {
      magnitudeValue: 50.0;
      magnitudeUnit: 'kts';
      date: '2023-12-10T18:00:00Z';
      type: 'Point';
      coordinates: [151.5, -17.5];
    },
    {
      magnitudeValue: 45.0;
      magnitudeUnit: 'kts';
      date: '2023-12-11T00:00:00Z';
      type: 'Point';
      coordinates: [150.3, -17.8];
    },
    {
      magnitudeValue: 45.0;
      magnitudeUnit: 'kts';
      date: '2023-12-11T06:00:00Z';
      type: 'Point';
      coordinates: [149.6, -17.5];
    },
    {
      magnitudeValue: 45.0;
      magnitudeUnit: 'kts';
      date: '2023-12-11T12:00:00Z';
      type: 'Point';
      coordinates: [149.1, -16.7];
    },
    {
      magnitudeValue: 50.0;
      magnitudeUnit: 'kts';
      date: '2023-12-11T18:00:00Z';
      type: 'Point';
      coordinates: [148.4, -16.6];
    },
    {
      magnitudeValue: 55.0;
      magnitudeUnit: 'kts';
      date: '2023-12-12T00:00:00Z';
      type: 'Point';
      coordinates: [147.9, -16.3];
    },
    {
      magnitudeValue: 60.0;
      magnitudeUnit: 'kts';
      date: '2023-12-12T06:00:00Z';
      type: 'Point';
      coordinates: [147.2, -15.9];
    },
    {
      magnitudeValue: 50.0;
      magnitudeUnit: 'kts';
      date: '2023-12-12T12:00:00Z';
      type: 'Point';
      coordinates: [147.3, -15.5];
    },
    {
      magnitudeValue: 45.0;
      magnitudeUnit: 'kts';
      date: '2023-12-12T18:00:00Z';
      type: 'Point';
      coordinates: [147, -15.6];
    },
    {
      magnitudeValue: 55.0;
      magnitudeUnit: 'kts';
      date: '2023-12-13T00:00:00Z';
      type: 'Point';
      coordinates: [146.4, -15.7];
    },
    {
      magnitudeValue: 60.0;
      magnitudeUnit: 'kts';
      date: '2023-12-13T06:00:00Z';
      type: 'Point';
      coordinates: [145.8, -15.7];
    },
    {
      magnitudeValue: 50.0;
      magnitudeUnit: 'kts';
      date: '2023-12-13T12:00:00Z';
      type: 'Point';
      coordinates: [145, -15.8];
    }
  ];
};

export default Event;
