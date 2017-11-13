export const sum = (a, b) => {
  return a + b;
};
  
export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};

export const average = (a, b) => {
  return divide(sum(a, b), 2);
};
