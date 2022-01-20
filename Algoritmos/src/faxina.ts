function cleanUndefinedProps(object: {}) {
  if (typeof object !== 'object') {
    console.error('Please insert a correct object inside this function param');
    return {};
  }

  const objectInArrayFormat = Object.entries(object);
  const filteredArray = objectInArrayFormat.filter(
    (element: [string, any]) => element[1] !== undefined && element[1] !== null
  );
  const newObject = Object.fromEntries(filteredArray);

  return newObject;
}

const obj = { fizz: 'buzz', foo: null, bar: 42, test: undefined };
const cleanedObj = cleanUndefinedProps(obj);

console.log(cleanedObj);
