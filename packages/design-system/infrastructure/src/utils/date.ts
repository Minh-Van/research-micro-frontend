export function equalDate(
  date1: Date,
  date2: Date,
  ignoreTime?: boolean
): boolean {
  if (!date1 && !date2) {
    return true;
  } else if (!date1 || !date2) {
    return false;
  }

  if (ignoreTime) {
    return (
      getDateWithoutTime(date1).getTime() ===
      getDateWithoutTime(date2).getTime()
    );
  } else {
    return date1.getTime() === date2.getTime();
  }
}

export function getFirstDateOfWeek(target: Date): Date {
  /* First day of week is the day of the month - the day of the week */
  return addDay(target, -target.getDay());
}

export function getLastDateOfWeek(target: Date): Date {
  return addDay(getFirstDateOfWeek(target), 6);
}
/**
 * @param date
 * @param firstDayOfWeek Which Sunday or Monday or another you want to be the first day of week.
 */
export function getFirstDateOfMonth(date: Date, firstDayOfWeek: number): Date {
  const _currentMonth = date.getMonth();
  let result = new Date(date);
  let _yesterday = addDay(result, -1);

  const _firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = () => {
    return (
      result.getMonth() !== _yesterday.getMonth() &&
      firstDayOfWeek === result.getDay()
    );
  };

  const _reachedTheFirstDayOfTheLastWeekOfPreviousMonth = () => {
    return (
      result.getMonth() !== _currentMonth && firstDayOfWeek === result.getDay()
    );
  };

  while (
    !_reachedTheFirstDayOfTheLastWeekOfPreviousMonth() &&
    !_firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()
  ) {
    result = new Date(_yesterday);
    _yesterday = addDay(_yesterday, -1);
  }

  return result;
}

export function getLastDateOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

export function getDateWithoutTime(target?: string | number | Date): Date {
  const result = target ? new Date(target) : new Date();
  result.setHours(0, 0, 0, 0);

  return result;
}

export function getDateWithTime(target?: string | number | Date): Date {
  const result = target ? new Date(target) : new Date();
  return result;
}

export function addHours(target: Date, hours: number): Date {
  const _date = new Date(target);
  return new Date(_date.setHours(_date.getHours() + hours));
}

export function addMinutes(target: Date, minutes: number): Date {
  const _date = new Date(target);
  return new Date(_date.setMinutes(_date.getMinutes() + minutes));
}

export function addDay(target: Date, days: number): Date {
  const _date = new Date(target);
  return new Date(_date.setDate(_date.getDate() + days));
}

export function addWeek(target: Date, weeks: number): Date {
  const _date = new Date(target);
  return new Date(
    _date.setDate(
      getFirstDateOfWeek(_date).getDate() + 6 * weeks + (weeks > 0 ? 1 : -1)
    )
  );
}

export function addMonth(
  target: Date,
  months: number,
  dayOfMonth?: number
): Date {
  const _date = new Date(target);
  return new Date(_date.setMonth(_date.getMonth() + months, dayOfMonth));
}

export function subtractMonth(target: Date, months: number): Date {
  const _date = new Date(target);
  return new Date(_date.setMonth(_date.getMonth() - months));
}

export function addYear(
  target: Date,
  years: number,
  monthOfYear?: number,
  dayOfMonth?: number
): Date {
  const _date = new Date(target);
  return new Date(
    _date.setFullYear(
      _date.getFullYear() + years,
      monthOfYear || _date.getMonth(),
      dayOfMonth || _date.getDate()
    )
  );
}

export function differentDays(date1: Date, date2: Date): number {
  return Math.round(
    Math.abs((date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000))
  );
}
