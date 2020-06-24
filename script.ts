let dieDiv = document.getElementById("dice-container");
let allDice: Die[] = [];
let diceSum: number = 0;
let deletedDice: Die[] = [];
let dieId: number = 0;

interface Die {
  id: number;
  value: number;
  die: HTMLElement;
  stringValue: string;
}

class Die {
  constructor(id: number) {
    this.id = id;
    this.value = 0;
    this.stringValue = ""
    this.die = document.createElement("div");
    dieDiv!.appendChild(this.die);
    this.die.classList.add("die");
    this.roll();
    allDice.push(this);
    this.die.addEventListener("click", () => this.roll());
    this.die.addEventListener("dblclick", () => this.remove(event));
  }

  roll() {
    this.value = Math.ceil(Math.random() * 6);
    this.stringValue = this.value.toString();
    this.die.textContent = this.stringValue;
  }

  remove(event: any) {
    let targetDie = this;
    event.currentTarget.remove();
    allDice.forEach((item, index) => {
      if (item === targetDie) {
        deletedDice = allDice.splice(index, 1);
      }
    });
  }
}

//Adds a button that generates another die on the page
let dieButton = document.getElementById("generateDie");
dieButton!.addEventListener("click", () => {
  new Die(dieId);
  ++dieId;
});

//Adds a button that rolls all the dice
let rollButton = document.getElementById("rollDiceBtn");
rollButton!.addEventListener("click", () => {
  allDice.forEach((item) => {
    item.roll();
  });
});

//Adds a button that totals up the value of all currently showing dice
let addButton = document.getElementById("addButton");
addButton!.addEventListener("click", () => {
  diceSum = 0;
  allDice.forEach((item) => {
    diceSum += item.value;
  });
  let diceSumDiv = document.getElementById("diceSum");
  diceSumDiv!.textContent = `Total: ${diceSum}`;
});
