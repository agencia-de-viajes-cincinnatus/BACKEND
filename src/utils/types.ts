import { Destination } from "src/typeorm/entities/Destination";

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
