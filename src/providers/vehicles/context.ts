import { createContext } from 'react';

import { VehiclesContextType } from './types';

export const defaultValue: VehiclesContextType = {
  vehicles: [],
  addVehicle: () => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Called addVehicle. Did you forget to provide a provider?');
    }
  },
  deleteVehicle: () => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Called deleteVehicle. Did you forget to provide a provider?');
    }
  },
  isLoading: false,
};

const VehiclesContext = createContext<VehiclesContextType>(defaultValue);
VehiclesContext.displayName = 'VehiclesContext';

export default VehiclesContext;
