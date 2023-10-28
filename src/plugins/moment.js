import moment from "moment";

export function formatDate(date) {
  return moment(new Date(date)).format("DD.MM.YYYY");
}

export function formatDay(date) {
  return moment(new Date(date)).format("DD.MM");
}

export function formatTime(minutes) {
  const duration = moment.duration(minutes, "minutes");
  const hours = Math.floor(duration.asHours());
  const mins = Math.floor(duration.asMinutes()) - hours * 60;
  const formattedTime = moment({ hour: hours, minute: mins }).format("HH:mm");
  return formattedTime;
}
