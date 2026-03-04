export interface User {
    id: number;           // Must be number (not optional) to fix line 68 error
    name: string;
    position?: string;
    department?: string;
    details?: {
    role: (string | number)[]; // Fixes TS2322: Allow an array of strings/numbers
    };
  }
  