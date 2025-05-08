import { loadManifest } from '@angular-architects/module-federation';
import { CustomRemoteConfig } from './app/utils/config';

export function fetchRemotes(): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      const manifest = {
        mfe1: {
            "remoteEntry": "http://localhost:4201/remoteEntry.js",
            "exposedModule": "./Module",
            "displayName": "Flights",
            "routePath": "flights",
            "ngModuleName": "FlightsModule"
        },
        mfe2: {
            "remoteEntry": "http://localhost:4202/remoteEntry.js",
    
            "exposedModule": "./Module",
            "displayName": "Bookings",
            "routePath": "bookings",
            "ngModuleName": "BookingsModule"
        }
    }
      resolve(manifest);
    }, 1000); // Simulate API delay
  });
}