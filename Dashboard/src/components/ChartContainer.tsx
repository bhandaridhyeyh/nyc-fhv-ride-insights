
import React from 'react';
import { Card } from '@/components/ui/card';

interface ChartContainerProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title, 
  description, 
  icon, 
  children, 
  className = "" 
}) => {
  return (
    <Card className={`bg-dashboard-card border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 animate-slide-up ${className}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-blue-400">{icon}</div>}
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            {description && <p className="text-slate-400 text-sm mt-1">{description}</p>}
          </div>
        </div>
        
        <div className="bg-slate-900/50 rounded-lg p-4 min-h-[300px] flex items-center justify-center border border-slate-700">
          {children}
        </div>
      </div>
    </Card>
  );
};

export default ChartContainer;
