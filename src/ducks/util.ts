export enum OPERATIONS {
  ADD,
  SUBSTRACT
}

export function calculateTotal(
  currentTotal: string,
  payload: string,
  operator: OPERATIONS
) {
  if (operator === OPERATIONS.ADD) {
    return (parseFloat(currentTotal) + parseFloat(payload)).toFixed(2);
  }

  return (parseFloat(currentTotal) - parseFloat(payload)).toFixed(2);
}
