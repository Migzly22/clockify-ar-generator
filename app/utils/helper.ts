type nameType = 'full' | 'short' | 'initial' | 'lastFirst'

export enum DateFormatType {
  DateOnly = 'dateOnly',
  DateWithTime = 'dateWithTime',
  Numerical = 'numerical',
  MonthDay = 'monthDay',
  YearOnly = 'yearOnly',
  TimeOnly = 'timeOnly',
  Full = 'full',
  DEFAULT = 'default',
  DayAndDate = 'DayAndDate'
}

export const capitalizeFirstLetter = (input: string): string => {
    console.log('input :>> ', input);

    if (!input) return '';
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

export const  formatCurrency = (amount: number, locale: string = 'en-PH', currency: string = 'PHP'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(dateTime: Date | string | null | undefined, formatType: DateFormatType = DateFormatType.DEFAULT): string {
  if (!dateTime) return '';

  const date = new Date(dateTime); // Ensures it's a Date instance
  if (isNaN(date.getTime())) return ''; // Invalid date check

  const now = new Date();
  const isSameYear = now.getFullYear() === date.getFullYear();

  const options: Intl.DateTimeFormatOptions = (() => {
    switch (formatType) {
      case DateFormatType.DateOnly:
        return isSameYear
          ? { month: 'short', day: 'numeric' }
          : { month: 'short', day: 'numeric', year: 'numeric' };

      case DateFormatType.DayAndDate:
        return isSameYear
          ? { month: 'short', day: 'numeric' }
          : { month: 'short', day: 'numeric', year: 'numeric' };

      case DateFormatType.DateWithTime:
        return  {
          weekday: 'short',
          month: 'long',
          day: 'numeric'
        }

      case DateFormatType.Numerical:
        return { year: 'numeric', month: '2-digit', day: '2-digit' };

      case DateFormatType.MonthDay:
        return { month: 'short', day: 'numeric' };

      case DateFormatType.YearOnly:
        return { year: 'numeric' };

      case DateFormatType.TimeOnly:
        return { hour: 'numeric', minute: 'numeric', hour12: true };

      case DateFormatType.Full:
        return {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        };
      default:
        return {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        }
    }
  })();

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Remove Array Duplication
export const removeArrDuplication = <T extends { id: any }>(
  oldList: T[],
  newList: T[],
  reorder?: keyof T
): T[] => {
  const safeNewList = newList || [];
  const newItemsId = new Set(safeNewList.map(item => item.id));
  
  const filteredOldList = oldList.filter(item => !newItemsId.has(item.id));
  const mergedItems = [...filteredOldList, ...safeNewList];

  if(reorder) {
    return mergedItems.sort((a, b) => {
      const aValue = a[reorder];
      const bValue = b[reorder];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      }
      if (aValue instanceof Date && bValue instanceof Date) {
        return aValue.getTime() - bValue.getTime();
      }
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      }
      return 0;
    });
  }
  
  return mergedItems;
};

export const durationToHours = (duration: string): string => {
  if (!duration || typeof duration !== 'string') {
    throw new Error('Invalid input: duration must be a non-empty string');
  }

  const parts = duration.split(':');
  
  if (parts.length !== 3) {
    throw new Error('Invalid format: expected HH:MM:SS');
  }

  const [hoursStr, minutesStr, secondsStr] = parts;
  const hours = Number(hoursStr);
  const minutes = Number(minutesStr);

  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error('Invalid format: all parts must be numbers');
  }

  return `${hours}h ${minutes}m`
};