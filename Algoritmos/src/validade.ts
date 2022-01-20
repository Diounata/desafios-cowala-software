interface DateValidationProps {
  dateParam: string;
  daysToExpiration: number;
}

function validadeDate({ dateParam, daysToExpiration }: DateValidationProps): boolean {
  const date = new Date(dateParam);
  const dateParamTime = date.getTime();
  const currentTime = new Date().getTime();

  const dayInMs = 1000 * 60 * 60 * 24;
  const expirationDate = new Date(dateParamTime + daysToExpiration * dayInMs);
  const expirationDateTime = expirationDate.getTime();

  return currentTime > expirationDateTime;
}

function formatDate(date: Date): string {
  const insert = (str: number) => String(str).padStart(2, '0');

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${insert(day)}/${insert(month)}/${insert(year)}`;
}

const dateValidation: DateValidationProps = {
  dateParam: '2021-11-17',
  daysToExpiration: 180,
};

const isDateExpired = validadeDate(dateValidation);
const date = new Date(dateValidation.dateParam);

console.log(`Date: ${formatDate(date)}`);
console.log(`Days to expirate after this date: ${dateValidation.daysToExpiration}d`);
console.log(`Is expired? ${isDateExpired}`);
