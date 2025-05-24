
import React from 'react';
import { TrendingUp, Clock, Calendar } from 'lucide-react';
import ChartContainer from './ChartContainer';

const TripVolumeSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-blue-400" />
        <h2 className="text-2xl font-bold text-white">Trip Volume Trends</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Trips by Hour"
          description="Peak hours and daily patterns"
          icon={<Clock className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">📊 Your hourly trip volume chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Daily Trip Distribution"
          description="Weekly patterns and trends"
          icon={<Calendar className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">📈 Your daily distribution chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Monthly Trends"
          description="Seasonal variations in trip volume"
          className="lg:col-span-2"
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">📅 Your monthly trends chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TripVolumeSection;
