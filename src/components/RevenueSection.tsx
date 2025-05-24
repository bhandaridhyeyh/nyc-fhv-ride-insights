
import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import ChartContainer from './ChartContainer';

const RevenueSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8 text-green-400" />
        <h2 className="text-2xl font-bold text-white">Revenue & Fare Analysis</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Fare Distribution"
          description="Total and average fares including tips"
          icon={<DollarSign className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">💰 Your fare distribution chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Revenue Trends"
          description="Revenue patterns over time"
          icon={<TrendingUp className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">📊 Your revenue trends chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default RevenueSection;
