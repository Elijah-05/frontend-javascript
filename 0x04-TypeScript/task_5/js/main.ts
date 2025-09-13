// ----- Interfaces with branding -----
export interface MajorCredits {
  credits: number;
  // unique “brand” to distinguish from MinorCredits
  __brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  // unique “brand” to distinguish from MajorCredits
  __brand: 'Minor';
}

// ----- Helper functions to create branded types -----
export function createMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: 'Major' };
}

export function createMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: 'Minor' };
}

// ----- Sum functions -----
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'Major' };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'Minor' };
}

// ----- Example usage (optional) -----
const math = createMajorCredits(3);
const physics = createMajorCredits(4);
const art = createMinorCredits(2);
const music = createMinorCredits(1);

console.log('Total Major Credits:', sumMajorCredits(math, physics).credits); // 7
console.log('Total Minor Credits:', sumMinorCredits(art, music).credits);    // 3
