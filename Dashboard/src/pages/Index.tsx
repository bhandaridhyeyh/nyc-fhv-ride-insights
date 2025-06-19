
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import TripVolumeSection from '@/components/TripVolumeSection';
import RevenueSection from '@/components/RevenueSection';
import LocationSection from '@/components/LocationSection';
import CompanySection from '@/components/CompanySection';
import AccessibilitySection from '@/components/AccessibilitySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dashboard-bg via-slate-900 to-dashboard-bg">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DashboardHeader />
        
        <div className="space-y-16">
          <TripVolumeSection />
          <RevenueSection />
          <LocationSection />
          <CompanySection />
          <AccessibilitySection />
        </div>
        
        <footer className="mt-16 text-center text-slate-400 border-t border-slate-700 pt-8">
          <p>NYC For-Hire Vehicle Analytics Dashboard | Data Analysis of 239M+ Trip Records</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
