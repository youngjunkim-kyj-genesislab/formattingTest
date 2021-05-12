import React, { Fragment } from 'react';
import Highcharts from 'highcharts';
import HcMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

HcMore(Highcharts);
const Chart = ({ className, type = 'bar', title, subtitle, yAxisTitle, series }) => {
  const options = {
    chart: {
      polar: true,
      type: type,
    },
    title: {
      text: title,
      x: -80,
    },
    pane: {
      size: '80%',
    },
    xAxis: {
      categories: [
        '도전과 실천',
        '인재 제일',
        '창의적사고1',
        '창의적사고2',
        '주인의식/소통과 협력',
        '도전정신',
      ],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
    },
    series: series,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
            pane: {
              size: '70%',
            },
          },
        },
      ],
    },
  };
  return (
    <div className={className}>
      <HighchartsReact Highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
