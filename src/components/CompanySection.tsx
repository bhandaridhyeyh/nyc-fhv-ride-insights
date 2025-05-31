
import React from 'react';
import { Building2, PieChart, BarChart3 } from 'lucide-react';
import ChartContainer from './ChartContainer';
import trips from '../images/img51.png';
import revenue from '../images/img52.png';

const CompanySection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-8 h-8 text-orange-400" />
        <h2 className="text-2xl font-bold text-white">Company Performance Comparison</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Uber vs Lyft Trips"
          description="Trip volume comparison"
          icon={<BarChart3 className="w-5 h-5" />}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={trips} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Market Share Analysis"
          description="Revenue and market share insights"
          icon={<PieChart className="w-5 h-5" />}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={revenue} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CompanySection;
