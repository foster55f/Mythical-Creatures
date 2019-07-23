
class Wizard {
  constructor(properties){
    this.name = properties.name
    this.isRested = true
    this.numberOfSpells = 0 
    if(properties.bearded === undefined){
      this.bearded = true
    }else{
      this.bearded = properties.bearded
    }

  }
  incantation(spellName){
      return spellName.toUpperCase()
  }
  cast(){
    this.numberOfSpells += 1
    
    if(this.numberOfSpells >= 3){
      this.isRested = false
    }
     if(this.numberOfSpells > 3) {
      return 'I SHALL NOT CAST' 
    }else{
      return 'MAGIC BULLET'
    }
  }

}



module.exports = Wizard