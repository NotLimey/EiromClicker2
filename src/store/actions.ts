
export const INCREMENT_COOKIE = "INCREMENT_COOKIE";
export const DECREMENT_COOKIE = "DECREMENT_COOKIE";

export type ActionTypes = 
    | {type: typeof INCREMENT_COOKIE; }
    | {type: typeof DECREMENT_COOKIE; }