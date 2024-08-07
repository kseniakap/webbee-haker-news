export const getRating = (value: number) => {
  let rating;
  switch (true) {
    case value > 100:
      rating = '☆☆☆☆☆';
      break;
    case value > 80:
      rating = '☆☆☆☆';
      break;
    case value > 40:
      rating = '☆☆☆';
      break;
    case value > 20:
      rating = '☆☆';
      break;
    default:
      rating = '☆';
  }
  return rating;
};
