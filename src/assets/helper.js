const dateTime = function (date) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};

const formatAMPM = function (time) {
  return time >= 12 ? "PM" : "AM";
};

const localTime = function (date = new Date()) {
  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

export { dateTime, formatAMPM, localTime };
