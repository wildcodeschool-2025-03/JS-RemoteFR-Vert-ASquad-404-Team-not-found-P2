const baseRevolution = 88;
const baseVisualTime = 20;

export const getRevolutionDuration = (days: number, multiplier = 1): number => {
  return ((days / baseRevolution) * baseVisualTime) / multiplier;
};
