import Character from "./character";
export default class Swordsman extends Character{
    constructor(name,type){
      super(name,type);
      this.type = "Swordsman";
      this.attack = 40;
      this.defence = 10;
    }
  }