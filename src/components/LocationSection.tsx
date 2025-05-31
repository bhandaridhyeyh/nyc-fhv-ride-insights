
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import ChartContainer from './ChartContainer';
import pl from '../images/img41.png';
import dl from '../images/img42.png';
import popular from '../images/img43.png';

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
          <div className="flex flex-col items-center gap-6">
            <img
              src={pl} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Top Dropoff Locations"
          description="Most popular destinations"
          icon={<Navigation className="w-5 h-5" />}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={dl} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Popular Route Pairs"
          description="Most frequent pickup-dropoff combinations"
          className="lg:col-span-2"
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={popular} // replace with your actual image path
              alt="Hourly trip volume chart"
              className="h-auto"
            />
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default LocationSection;
