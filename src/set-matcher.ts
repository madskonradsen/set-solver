interface ICard {
    [key: string]: any;
    "num": string;
    "color": string;
    "fill": string;
    "shape": string;
}

export default function isSet(c1: string, c2: string, c3: string) {
    const cc1 = splitIntoProps(c1);
    const cc2 = splitIntoProps(c2);
    const cc3 = splitIntoProps(c3);
    const cards = [cc1, cc2, cc3];
    return sameOrDiff(cards, "num") &&
      sameOrDiff(cards, "color") &&
      sameOrDiff(cards, "fill") &&
      sameOrDiff(cards, "shape");
}

function different(p: string[]) {
  return (p[0] !== p[1]) && (p[0] !== p[2]) && (p[1] !== p[2]);
}

function same(p: string[]) {
  return (p[0] === p[1]) && (p[0] === p[2]);
}

function sameOrDiff(cards: ICard[], prop: string) {
  const props = cards.map((i) => i[prop]);
  return same(props) || different(props);
}

const NUMS = ["1", "2", "3"];
const COLORS = ["purple", "green", "red"];
const FILLS = ["solid", "hatched", "open"];
const SHAPES = ["pill", "squiggle", "diamond"];

function splitIntoProps(card: string) {
  const fragments = card.split(" ");

  if (!NUMS.includes(fragments[0])) { throw Error("Unknown NUM " + fragments[0]); }
  if (!COLORS.includes(fragments[1])) { throw Error("Unknown COLOR " + fragments[1]); }
  if (!FILLS.includes(fragments[2])) { throw new Error("Unknown FILL " + fragments[2]); }
  if (!SHAPES.includes(fragments[3])) { throw new Error("Unknown SHAPE " + fragments[3]); }

  return {
    color: fragments[1],
    fill: fragments[2],
    num: fragments[0],
    shape: fragments[3],
  };
}
