import Character from "./character";
export default class Magician extends Character{
    constructor(name,type){
      super(name,type);
      this.type = "Magician";
      this.attack = 10;
      this.defence = 40;
    }
  }