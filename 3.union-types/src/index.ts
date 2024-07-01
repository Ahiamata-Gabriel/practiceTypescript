function kgTolbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight);
}

kgTolbs(10);
kgTolbs("10kg");
