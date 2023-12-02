export type CreateReservationParams = {
  date: Date;
  completed: boolean;
  employee: string;
};

export type UpdateReservationParams = {
  date: Date;
  completed: boolean;
  employee: string;
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
