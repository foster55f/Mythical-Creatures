class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if(this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    for (var index = 0; index < this.riddles.length; index++) { 
      if (this.riddles[index].answer === answer) {
        this.riddles.splice(index,1);
        if(this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
        }else {
          return 'That wasn\'t that hard, I bet you don\'t get the next one'
        }
      } else {
        this.heroesEaten = 1;
      } 
    }
  }
}

module.exports = Sphinx;