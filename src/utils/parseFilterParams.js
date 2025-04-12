const parseTransmission = (transmission) => {
  const isString = typeof transmission === 'string';
  if (!isString) return;
  const isTransmission = (transmission) =>
    ['automatic', 'manual'].includes(transmission);

  if (isTransmission(transmission)) return transmission;
};

const parseEngineType = (engineType) => {
  const isString = typeof engineType === 'string';
  if (!isString) return;
  const isEngineType = (engineType) =>
    ['petrol', 'diesel', 'electric', 'hybrid', 'gas'].includes(engineType);

  if (isEngineType(engineType)) return engineType;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return;
  }

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const {
    transmission,
    engineType,
    maxPrice,
    minPrice,
    maxMileage,
    minMileage,
    maxEnginePower,
    minEnginePower,
    maxYear,
    minYear,
  } = query;

  const parsedTransmission = parseTransmission(transmission);
  const parsedEngineType = parseEngineType(engineType);
  const parsedMaxPrice = parseNumber(maxPrice);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxMileage = parseNumber(maxMileage);
  const parsedMinMileage = parseNumber(minMileage);
  const parsedMaxEnginePower = parseNumber(maxEnginePower);
  const parsedMinEnginePower = parseNumber(minEnginePower);
  const parsedMaxYear = parseNumber(maxYear);
  const parsedMinYear = parseNumber(minYear);

  return {
    transmission: parsedTransmission,
    engineType: parsedEngineType,
    maxPrice: parsedMaxPrice,
    minPrice: parsedMinPrice,
    maxMileage: parsedMaxMileage,
    minMileage: parsedMinMileage,
    maxEnginePower: parsedMaxEnginePower,
    minEnginePower: parsedMinEnginePower,
    maxYear: parsedMaxYear,
    minYear: parsedMinYear,
  };
};
