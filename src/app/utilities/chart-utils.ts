import { Data } from "../models/chart.model";
import { chartData } from "../models/chart.model";


export function toLineChartData(data: Data): any {
  return {
    labels: data.labels,
    datasets: data.datasets.map((i) => toDataSet(i)),
  };
}

export function toDataSet(y: chartData): any {
  return {
    data: y.data,
    label: y.label,
    fill: true,
    tension: 0.5,
    borderColor: getRandomColor(),
    backgroundColor: getRandomColor(),
  };
}

export function getRandomColor(): string {
  return `rgba(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()}, 0.5)`;
}

export function getRandomInt() {
  const min = 0;
  const max = 255;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

