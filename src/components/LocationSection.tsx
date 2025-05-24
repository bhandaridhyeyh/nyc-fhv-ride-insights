
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import ChartContainer from './ChartContainer';

const LocationSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Popular Locations & Routes</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Top Pickup Locations"
          description="Most popular pickup spots"
          icon={<MapPin className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">📍 Your pickup locations chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Top Dropoff Locations"
          description="Most popular destinations"
          icon={<Navigation className="w-5 h-5" />}
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">🎯 Your dropoff locations chart</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Popular Route Pairs"
          description="Most frequent pickup-dropoff combinations"
          className="lg:col-span-2"
        >
          <div className="text-center text-slate-400">
            <p className="text-lg">🗺️ Your route pairs visualization</p>
            <p className="text-sm mt-2">Drop your chart image here</p>
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default LocationSection;
