import date from "date-and-time";

const time = new Date();

// get today date
export const dateNow = date.format(time, "DD MMM YYYY");

// get today time
export const timeNow = date.format(time, "HH:mm");
