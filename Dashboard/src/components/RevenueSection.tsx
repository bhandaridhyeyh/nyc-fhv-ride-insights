
import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import ChartContainer from './ChartContainer';
import monthlyRevenue from '../images/img31.png';
import dailyFare from '../images/img32.png';

const RevenueSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8 text-green-400" />
        <h2 className="text-2xl font-bold text-white">Revenue & Fare Analysis</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Daily Average Fare"
          description="Total and average fares including tips"
          icon={<DollarSign className="w-5 h-5" />}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={dailyFare} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Monthly Revenue Trends"
          description="Revenue patterns over time"
          icon={<TrendingUp className="w-5 h-5" />}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={monthlyRevenue} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default RevenueSection;
