import { Timetable } from "@schooly/controller";

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
  if(!url.startsWith('http')){
    url = `session/${url}`
  }
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export const getSelectedTimetable = ({timeTable, nowDate}: {timeTable: Timetable[] | undefined, nowDate: Date}) => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const nowDay = new Date().getDay();

  let selectedTimetable = timeTable?.filter(
    (session) => (session.recurring && days[nowDay] === session.day) || (!session.recurring && nowDate.toDateString() === new Date(session.date!).toDateString())
  );

  console.log(selectedTimetable)

  let day = 'today';

  if(selectedTimetable?.length === 0){
    if(nowDate.getTime() < 17){
      return({day, isSessions: false});
    }else{
      const newDate = new Date();
      newDate.setDate(nowDate.getDate() + 1);
      selectedTimetable = timeTable?.filter(
        (session) => (session.recurring && days[nowDay + 1] === session.day) || (!session.recurring && newDate.toDateString() === new Date(session.date!).toDateString())
      );
  
      day = 'tomorrow';

      if(selectedTimetable?.length === 0){
        return({day, isSessions: false});
      }
    }
  }

  const lastSession = selectedTimetable![selectedTimetable!.length - 1];

  const { endDate } = startEndDates(
    lastSession.start_time,
    lastSession.duration_mins
  );

  if (nowDate > endDate) {
    const newDate = new Date();
    newDate.setDate(nowDate.getDate() + 1);
    selectedTimetable = timeTable?.filter(
      (session) => (session.recurring && days[nowDay + 1] === session.day) || (!session.recurring && newDate.toDateString() === new Date(session.date!).toDateString())
      );
      day = 'tomorrow';
      if(selectedTimetable?.length === 0){
        return({day, isSessions: false});
      }
  }

  return({day, selectedTimetable, lastSession, isSessions: true});
};