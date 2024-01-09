export type CreateReservationParams = {
  date: Date;
  completed: boolean;
  employee: string;
  passengers: number;
};

export type UpdateReservationParams = {
  date: Date;
  completed: boolean;
  employee: string;
  destination?: string;
  passengers: number;
};

export type CreateDestinationParams = {
  country: string;
  city: string;
  price: number;
  description: string;
  score: number;
};

export type UpdateDestinationParams = {
  country: string;
  city: string;
  price: number;
  description: string;
  score: number;
};

export type CreateServiceParams = {
  date: Date;
  type: string;
  price: number;
};

export type UpdateServiceParams = {
  date: Date;
  type: string;
  price: number;
  supplier?: string;
};
