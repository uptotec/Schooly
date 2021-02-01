export const formatAMPM = (time: string, shift?: number) => {
  let shiftMins = 0;
  let shiftHours = 0;

  const TimeArr = time.split(':');

  if (shift) {
    while (shift >= 60) {
      shiftHours++;
      shift -= 60;
    }

    if (shift + +TimeArr[1] >= 60) {
      shiftHours++;
      shiftMins = shift - 60;
    } else {
      shiftMins = shift;
    }
  }

  const shiftedHours = +TimeArr[0] + shiftHours;
  const shiftedMins = +TimeArr[1] ? +TimeArr[1] + shiftMins : shiftMins;
  const hours = shiftedHours > 12 ? shiftedHours - 12 : shiftedHours;
  const ampm = shiftedHours >= 12 ? 'PM' : 'AM';
  return `${hours}:${shiftedMins || '00'} ${ampm}`;
}

export const startEndDates = (startTime: string, durationMins: number) => {
  const timeArr = startTime.split(':');
  const STH = +timeArr[0];
  const STM = +timeArr[1];
  let duration = durationMins;
  let ETH = STH,
    ETM = STM;
  while (duration > 60) {
    ETH++;
    duration -= 60;
  }

  if (duration + ETM >= 60) {
    ETH++;
    ETM = duration + ETM - 60;
  } else {
    ETM += duration;
  }

  const startDate = new Date();
  startDate.setHours(STH);
  startDate.setMinutes(STM);
  startDate.setSeconds(0);

  const endDate = new Date();
  endDate.setHours(ETH);
  endDate.setMinutes(ETM);
  endDate.setSeconds(0);

  return { startDate, endDate };
};

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};