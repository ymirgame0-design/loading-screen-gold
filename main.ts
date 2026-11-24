// Loading Screen Gold — 200 char max tip
const tip = "Hydrate before debugging. Your brain is 75% water and 25% stack overflow. Coffee counts as water if you believe hard enough.";

if (tip.length > 200) {
  console.error(`Tip too long: ${tip.length}/200`);
  process.exit(1);
}

console.log(tip);