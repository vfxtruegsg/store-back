export const filtrationCarsRequest = (model, filterParams) => {
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
  } = filterParams;

  if (engineType) {
    model.where('engine_type').equals(engineType);
  }
  if (transmission) {
    model.where('transmission').equals(transmission);
  }
  if (maxPrice) {
    model.where('price').lte(maxPrice);
  }
  if (minPrice) {
    model.where('price').gte(minPrice);
  }
  if (maxMileage) {
    model.where('mileage').lte(maxMileage);
  }
  if (minMileage) {
    model.where('mileage').gte(minMileage);
  }
  if (maxEnginePower) {
    model.where('engine_power').lte(maxEnginePower);
  }
  if (minEnginePower) {
    model.where('engine_power').gte(minEnginePower);
  }
  if (maxYear) {
    model.where('year').lte(maxYear);
  }
  if (minYear) {
    model.where('year').gte(minYear);
  }
};
