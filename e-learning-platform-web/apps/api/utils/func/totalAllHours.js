const totalAllHours = (data) => {
  let hours = 0;
  data.map((item) => {
    hours = hours + Number(item.hour);
  });
  return hours;
};

module.exports = totalAllHours;
