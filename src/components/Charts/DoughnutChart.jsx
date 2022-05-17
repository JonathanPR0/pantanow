import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ chartData }) => {
  return (
    <div className="w-full px-5">
      <Doughnut
        data={chartData}
        options={{
          layout: {
            padding: 20,
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
