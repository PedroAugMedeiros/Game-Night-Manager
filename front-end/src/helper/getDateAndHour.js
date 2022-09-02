export const formatDate = () => {
  const d = new Date();
  const month = String(d.getMonth()).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');;
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const atualDate = [day, month, year].join('/');
  const atualHour = [hour, minutes, seconds].join(':');

  const DateAndHour = {
    date: atualDate,
    hour: atualHour,
  }
  return DateAndHour;
}
