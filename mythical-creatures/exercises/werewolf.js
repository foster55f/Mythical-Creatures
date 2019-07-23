class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false
  }

  change() {
    this.human = false;
    this.wolf = !this.wolf;
  }

}
























module.exports = Werewolf

// class Werewolf {
//   constructor(name){
//     this.name = name;
//     this.location = 'Basement lair';
//     this.human = true;
//     this.wolf = false;
//     this.hungry = false;
//   }

//   change(){
//     // if( this.human === false) {
//     //   this.human = true
//     // } else {
//     //   this.human = false
//     // }
  
//     // if(this.wolf === false) {
//     //   this.wolf = true
//     // }else if (this.wolf === true) {
//     //   this.wolf = false
//     // }

//     this.human = !this.human
//     this.wolf = !this.wolf
//     this.hungry = true


//   }

//   eat(victim) {
//     this.hungry = false;
//     this.human = true
//     victim.alive = false
//   }

// }



