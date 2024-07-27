export const getRating = (value: number) => {
  const rating = value && (value > 100 ? '☆☆☆☆☆' : value > 80 ? '☆☆☆☆' : value > 40 ? '☆☆☆' : value > 20 ? '☆☆' : '☆');
  return rating;
};
