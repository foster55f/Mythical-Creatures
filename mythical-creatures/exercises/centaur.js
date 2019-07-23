class Centaur {
  constructor(name,breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.actionTotal =0;
    // this.runTotal =0;
    this.layingDown = false;
  }

  shoot() {
    this.actionTotal +=1;
    if(this.actionTotal % 3 === 0) {
      this.cranky = true;
    } 

    if (this.cranky || this.layingDown) {
      return 'NO!';
    }
    return 'Twang!!!';
  }

  run() {
    this.actionTotal +=1;
    if(this.actionTotal >= 3) {
      this.cranky = true;
    } 

    if (this.cranky || this.layingDown) {
      return 'NO!';
    }

    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      return 'ZZZZ';
    }
    return 'NO!';
  }

  layDown() {
    this.rested += 1;
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
   if(this.layingDown) {
    return 'Not while I\'m laying down!'
    }
    this.cranky = !this.cranky;
  }
}



module.exports = Centaur