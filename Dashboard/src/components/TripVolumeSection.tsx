
import React from 'react';
import { TrendingUp, Clock, Calendar } from 'lucide-react';
import ChartContainer from './ChartContainer';
import imgHourly from '../images/img11.png';
import imgDaily from '../images/img12.png';
import imgWeekly from '../images/img13.png';
import hourlyTrips from '../images/img21.png';
import dailyTrips from '../images/img22.png';
import weeklyTrips from '../images/img23.png';
import monthlyTrips from '../images/img24.png';

const TripVolumeSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-blue-400" />
        <h2 className="text-2xl font-bold text-white">Trip Volume Trends</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Peak Timings"
          description="Peak hours, days, weeks, and daily patterns"
          icon={<Clock className="w-5 h-5" />}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={imgHourly} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
            <img
              src={imgDaily} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
            <img
              src={imgWeekly} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>

        <ChartContainer
          title="Trip Distribution"
          description="Hourly, Daily, Weekly patterns and trends"
          icon={<Calendar className="w-5 h-5" />}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={hourlyTrips} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
            <img
              src={dailyTrips} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
            <img
              src={weeklyTrips} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>

        <ChartContainer
          title="Monthly Trends"
          description=""
          className="lg:col-span-2"
        >
          <div className="text-center text-slate-400">
            <img
              src={monthlyTrips} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TripVolumeSection;
