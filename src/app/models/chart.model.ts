export interface Data {
  labels: string[];
  datasets: chartData[];
}

export interface chartData {
  label: string;
  data: number[];
}
