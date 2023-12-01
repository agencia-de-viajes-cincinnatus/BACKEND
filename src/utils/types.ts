export type CreateReservationParams = {
  destination: string;
  date: Date;
  completed: boolean;
  employee: string;
};

export type UpdateReservationParams = {
  destination: string;
  date: Date;
  completed: boolean;
  employee: string;
};
