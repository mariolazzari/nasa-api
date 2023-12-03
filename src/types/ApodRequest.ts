export type ApodRequest = Partial<{
  date: string;
  start_date: string;
  end_date: string;
  count: number;
  thumbs: boolean;
}>;

export default ApodRequest;
