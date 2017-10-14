let res: string[] = [];

export default function getCombinations(arr: string[]) {
  res = [];
  combinations(arr, 3, 0, 0, []);
  const temp = res;
  // Free the extra memory
  res = [];
  return temp;
}

function combinations(arr: string[], k: number, start: number, idx: number, current: any) {
  if (idx === k) {
    res.push(current.slice());
    return;
  }
  for (let i = start; i < arr.length; i += 1) {
    current[idx] = arr[i];
    combinations(arr, k, i + 1, idx + 1, current);
  }
}
