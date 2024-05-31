import React from 'react';
import { Grid } from '@mui/material';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTheme } from '@emotion/react';

const LineChartExample = () => {
  const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  ];
  const theme=useTheme();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke={theme.palette.primary.main} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Grid>
  );
};

const BarChartExample = () => {
  const theme=useTheme();

  const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  ];

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <Bar dataKey="uv" fill={theme.palette.primary.main} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};

const PieChartExample = () => {
  const theme=useTheme();

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={data} fill={theme.palette.primary.main} label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Grid>
  );
};

const AreaChartExample = () => {
  const theme=useTheme();

  const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  ];

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="uv" stroke={theme.palette.secondary.main} fill={theme.palette.primary.main} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </Grid>
  );
};

const ChartExamples = () => {
  const theme=useTheme();

  return (
    <Grid container spacing={3}>
      <LineChartExample />
      <BarChartExample />
      <PieChartExample />
      <AreaChartExample />
    </Grid>
  );
};

export default ChartExamples;
