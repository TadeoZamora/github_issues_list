import moment from "moment";
//created a simple and more dynamic functions
const moment_with_format = (value, formatString) => {
  return moment(value).format(formatString);
};

const moment_relative_time = (value) => {
  return moment(value).fromNow();
};
export { moment_relative_time, moment_with_format };
