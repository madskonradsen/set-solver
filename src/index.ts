import Combinations from "combinations";
import SetMatcher from "set-matcher";

export default function setSolver(hand: string[]) {
  const combinations = Combinations(hand);
  const result: string[] = [];
  combinations.forEach((entry) => {
    const isMatch = SetMatcher(entry[0], entry[1], entry[2]);
    if (isMatch) { result.push(entry); }
  });
  return result;
}
