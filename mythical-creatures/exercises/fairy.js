class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] }
    this.disposition = 'Good natured';
    this.humanWards = []
  }

  receiveBelief() {
    this.dust ++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    // var i;
    // this.clothes.dresses[i].push(dresses)
    // console.log(this.clothes.dresses[i])
    this.clothes.dresses.push(dresses)
    this.clothes.dresses = this.clothes.dresses.flat()
    console.log(this.clothes.dresses)
  }
  provoke() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if(this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious'
    }
    this.humanWards.push(infant);
    if(this.humanWards.length === 3) {
      this.disposition = 'Good natured'
    } 

    return infant
  }
}








module.exports = Fairy