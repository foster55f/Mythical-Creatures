class Direwolf {
  constructor(name,home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;

  }

  protect(stark) {
    if(this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    // var i;
    // for(i=0; i < this.starksToProtect.length; i++) {
    //   if(this.starksToProtect[i] === stark) {
    //   this.starksToProtect.splice(i,1);
    //   stark.safe = false;
    //   }
    // }
    var classInstance = this
    this.starksToProtect.forEach(function(eachStark, i) {
      if(eachStark === stark) {
        classInstance.starksToProtect.splice(i,1);
        stark.safe = false;
      }

    })

  }
}






module.exports = Direwolf