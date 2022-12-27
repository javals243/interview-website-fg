import { toast } from 'react-toastify';

// get config object for axios
export const getAxiosConfig = (token: string) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

// show a toast message
export const showToastMessage = (
  message: string,
  type: string = 'error'
): void => {
  if (type === 'error') {
    toast.error(message, {
      toastId: 'geevadon-error-id',
    });
  } else if (type === 'success') {
    toast.success(message, {
      toastId: 'geevadon-success-id',
    });
  }
};

// get a formatted date
export const getFormattedDate = (t: any) => {
  const date = new Date(t);

  const formattedDate = date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Paris',
  });

  return formattedDate;
};

// get formatted date and time
export const getFormattedDateAndTime = (date: string) => {
  const d = new Date(date);

  const formattedDate = d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Paris',
  });

  const formattedTime = d.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
  });

  return `${formattedDate}, ${formattedTime}`;
};

// substring text
export const substringText = (
  text: string,
  to: number = 200,
  dotsSymbol: string = '[...]'
): string => {
  const cleanedText = text.replace(/<\/?[^>]+(>|$)/g, ''); // remove all the HTML tags from the string
  const newText = cleanedText.substring(0, to);
  const dots = cleanedText.length > to ? dotsSymbol : '';

  return `${newText} ${dots}`;
};

// Email validation
export const isEmail = (email: string): boolean => {
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return filter.test(email);
};

