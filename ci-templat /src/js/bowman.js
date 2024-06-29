import Character from "./character";
export default class Bowman extends Character{
    constructor(name,type){
      super(name,type);
      this.type = "Bowman";
      this.attack = 25;
      this.defence = 25;
    }
  }