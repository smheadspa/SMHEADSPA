
// Fixed: Added React import to resolve missing 'React' namespace error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
}
