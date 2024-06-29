import Character from "./character";
export default class Undead extends Character{
    constructor(name,type){
      super(name,type);
      this.type = "Undead";
      this.attack = 25;
      this.defence = 25;
    }
  }