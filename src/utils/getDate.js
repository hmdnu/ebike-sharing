let date = new Date();

export let dateRent = date
  .toString()
  .split(" ")
  .slice(1, 4)
  .map((e) => e)
  .join("/");

export let pickUpTime = date
  .toString()
  .split(" ")
  .slice(4, 5)
  .join("")
  .split(":")
  .slice(0, 2)
  .join(":");
