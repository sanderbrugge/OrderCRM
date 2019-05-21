export interface Action {
  type: string;
  payload: any;
}

export const UNSENT = "UNSENT";
export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export interface AsyncResource {
  status: "UNSENT" | "PENDING" | "SUCCESS" | "FAILURE";
  error?: {
    status: number;
    message: string;
  };
}
