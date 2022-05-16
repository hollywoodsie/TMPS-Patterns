//bad way

// class HeroPower {
//   hero: string;

//   constructor(hero: string) {
//     this.hero = hero;
//   }

//   useAbility() {
//     if (this.hero === 'Malfurion') {
//       return `Used Malfurion's hero power!`;
//     }
//     if (this.hero === 'Rexxar') {
//       return `Used Rexxar's hero power!`;
//     }
//     if (this.hero === 'Illidan') {
//       return `Used Illidan's hero power!`;
//     }
//   }
// }

// const malfurion = new HeroPower('Malfurion');
// console.log(malfurion.useAbility());

//good way
interface HeroPower {
  useAbility(): string;
}
class Malfurion implements HeroPower {
  useAbility() {
    return `Used Malfurion's hero power!`;
  }
}
class Rexxar implements HeroPower {
  useAbility() {
    return `Used Rexxar's hero power!`;
  }
}
class Illidan implements HeroPower {
  useAbility() {
    return `Used Illidan's hero power!`;
  }
}

const malfurion = new Malfurion();
console.log(malfurion.useAbility());
