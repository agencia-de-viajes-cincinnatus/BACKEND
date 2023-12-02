import { Destination } from 'src/typeorm/entities/Destination';

export type CreateReservationParams = {
  destination: Destination;
  date: Date;
  completed: boolean;
  employee: string;
};

export type UpdateReservationParams = {
  destination: Destination;
  date: Date;
  completed: boolean;
  employee: string;
};

export type CreateDestinationParams = {
  country: string;
  city: string;
  price: number;
  description: string;
  employee: string;
};

export type UpdateDestinationParams = {
  country: string;
  city: string;
  price: number;
  description: string;
  employee: string;
};
