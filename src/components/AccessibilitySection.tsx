
import React from 'react';
import { Users, Shield } from 'lucide-react';
import ChartContainer from './ChartContainer';

const AccessibilitySection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-8 h-8 text-cyan-400" />
        <h2 className="text-2xl font-bold text-white">Accessibility & Service Types</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Shared vs Solo Rides"
          description="Service type distribution"
          icon={<Users className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">👥 Your ride sharing chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="WAV Requests"
          description="Wheelchair accessible vehicle demand"
          icon={<Shield className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">♿ Your accessibility chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default AccessibilitySection;
