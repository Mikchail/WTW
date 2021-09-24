export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getRandomElement = (array: any[]) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export const extend = (a: any, b: any) => {
  return Object.assign({}, a, b);
};

export const getCities = (array: any[]) => {
  const cities = array.map((item) => item.city);
  const citiesByName = cities.reduce((acc, city) => {
    acc[city.name] = city;
    return acc;
  }, {});

  return Object.values(citiesByName);
};

const ratingToStarMap: any = {1: 20, 2: 40, 3: 60, 4: 80, 5: 100};
export const ratingToStar = (rating: number) =>
  ratingToStarMap[Math.round(rating)] || Math.round(rating);

export const encodeText = (str: string) => {
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/[\s+ :.,()&/\/]/g, `-`);
};
