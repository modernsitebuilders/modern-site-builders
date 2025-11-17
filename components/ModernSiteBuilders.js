'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Globe, Smartphone, TrendingUp, Users, Mail, Phone, MapPin, ArrowRight, Check, Menu, X } from 'lucide-react';

const ModernSiteBuilders = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Modern Site Builders</h1>
        <p className="text-xl text-gray-600 mb-8">Currently building. Check back soon.</p>
        <div className="space-y-2">
          <a href="https://streambackdrops.com" className="block text-blue-600 hover:underline">→ StreamBackdrops</a>
          <a href="https://jobcalculators.com" className="block text-blue-600 hover:underline">→ Job Calculators</a>
          <a href="https://dumpster-size-calculators.com" className="block text-blue-600 hover:underline">→ Dumpster Size Calculators</a>
        </div>
      </div>
    </div>
  );
};

export default ModernSiteBuilders;