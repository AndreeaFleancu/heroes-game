class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }

  attacked(damage) {
    if (this.canFly) {
      let chance = Math.random();

      if (chance > 0.5) {
        console.log(this.name + " flew away.");
        damage = 0;
      }
    }

    if (this.shield) {
      damage *= 0.8;
      console.log(this.name + " defends with a shield.");
    }

    this.hp -= damage;
    console.log(
      this.name +
        " has been attacked. HP reduced by " +
        damage +
        ". HP remaining: " +
        this.hp +
        "."
    );
  }
}

class Hulk extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 10;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Spiderman extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }

  attack(otherHero) {
    let damage = 15;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Ironman extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 5;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0;
  }

  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }

  changeTurn() {
    this.turn = 1 - this.turn;
  }

  findWinner() {
    let showWinner = "";
    if (this.hero1.hp > 0) {
      showWinner = this.hero1.name + " won with " + this.hero1.hp + " HP left.";
      console.log(showWinner);
      return showWinner;
    } else if (this.hero2 > 0) {
      showWinner = this.hero2.name + " won with " + this.hero2.hp + " HP left.";
      console.log(showWinner);
      return showWinner;
    } else {
      showWinner = "No heroes left alive.";
      console.log(showWinner);
      return showWinner;
    }
  }

  go() {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1 > 0 && this.hero2 > 0);

    this.findWinner();
  }
}

let hulk = new Hulk("Hulk", 80);
let spiderman = new Spiderman("Spiderman", 50);
let ironman = new Ironman("Ironman", 100);

let epicFight = new Fight(hulk, spiderman);
epicFight.go();
