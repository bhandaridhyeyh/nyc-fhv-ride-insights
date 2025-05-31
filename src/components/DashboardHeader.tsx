
import React from 'react';
import { BarChart3, TrendingUp, MapPin, Users } from 'lucide-react';

const DashboardHeader = () => {
  const stats = [
    {
      title: "Total Trips",
      value: "239.4M",
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "Revenue Generated",
      value: "$7.7B+",
      icon: TrendingUp,
      color: "text-green-400"
    },
  ];

  return (
    <div className="bg-gradient-to-r from-dashboard-card to-slate-800 rounded-xl p-8 mb-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          NYC For-Hire Vehicle Analytics Dashboard
        </h1>
        <p className="text-slate-300 text-lg">
          Comprehensive analysis of 239,448,588 trip records
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={stat.title}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
