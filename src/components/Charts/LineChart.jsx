import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = ({ chartData }) => {
  return (
    <Line
      data={chartData}
      className="w-full"
      options={{
        layout: {
          padding: 20,
        },
      }}
    />
  );
};

export default LineChart;
