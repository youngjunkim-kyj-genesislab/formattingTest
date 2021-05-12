import React from 'react';
import { addComma } from '../../util';
import Chart from './chart';
import './index.scss';

const ChartTest = () => {
  return (
    <div>
      ChartTest
      <Chart
        title='My Chart'
        subtitle='sub Title'
        yAxisTitle='Y축제목'
        type='line'
        className='web-chart'
        series={[
          {
            name: '지원자',
            data: [4.2, 2.5, 3, 1.5, 1.0, 5],
            pointPlacement: 'on',
          },
        ]}
      />
    </div>
  );
};

export default ChartTest;
