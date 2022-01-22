function getHorizonString(horizon: number): string {
  if (horizon === 1) return '+';
  else {
    const dashAmount = horizon - 2;
    const dashArray: string[] = [];

    for (let counter = 0; counter < dashAmount; counter++) dashArray.push('-');

    const dashString = Array.from(dashArray).join('');
    const joinedString = `+${dashString}+`;

    return joinedString;
  }
}

function displayHorizonString(horizon: number): void {
  const horizonString = getHorizonString(horizon);

  console.log(horizonString);
}

function displayVerticalString(vertical: number, horizon: number): void {
  if (horizon === 1) console.log('-');
  else {
    const verticalDashAmount = vertical - 2;
    const horizonDashAmount = horizon - 2;
    const dashArray: string[] = [];

    for (let counter = 0; counter < horizonDashAmount; counter++) dashArray.push(' ');
    const spacedString = Array.from(dashArray).join('');
    const joinedString = `-${spacedString}-`;

    for (let counter = 0; counter < verticalDashAmount; counter++) console.log(joinedString);
  }
}

function getFrame(horizon: number, vertical: number): void {
  displayHorizonString(horizon);
  displayVerticalString(vertical, horizon);
  displayHorizonString(horizon);
}

const result = () => getFrame(9, 6);

export default result;
