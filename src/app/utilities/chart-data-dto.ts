export class ChartDataDto {
  private  labelsKey!: string;
  private  dataKeys!: { label: string, key: string }[];

  constructor() {}

  transform(data: any[]) {
    // Detect label and data keys from the first item in the data array
    const firstItem = data[0];
    this.labelsKey = Object.keys(firstItem)[0];
    this.dataKeys = Object.keys(firstItem)
      .filter(key => key !== this.labelsKey)
      .map(key => ({ label: key, key }));

    // Transform data into chart data format
    const labels = data.map(item => item[this.labelsKey]);
    const datasets = [];
    const dataLength = data.length;

    for (let i = 0, l = this.dataKeys.length; i < l; i++) {
      const { label, key } = this.dataKeys[i];
      const values = new Array(dataLength);
      for (let j = 0; j < dataLength; j++) {
        values[j] = data[j][key];
      }
      datasets.push({ label, data: values });
    }

    return { labels, datasets };
  }
}
