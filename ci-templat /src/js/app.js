export default class Character{
    constructor(name){
      if(name === undefined || name.lenght < 2 || name.lenght > 10){
        throw new Error("Переписывай");
      }
      this.name = name;
      this.health = 100;
      this.level = 1;
    }
  }
  class Bowman extends Character{
    constructor(name){
      super(name);
      this.type = "Bowman";
      this.attack = 25;
      this.defence = 25;
    }
  }
  class Swordsman extends Character{
    constructor(name){
      super(name);
      this.type = "Swordsman";
      this.attack = 40;
      this.defence = 10;
    }
  }
  class Magician extends Character{
    constructor(name){
      super(name);
      this.type = "Magician";
      this.attack = 10;
      this.defence = 40;
    }
  }
  class Undead extends Character{
    constructor(name){
      super(name);
      this.type = "Undead";
      this.attack = 25;
      this.defence = 25;
    }
  }
  class Zombie extends Character{
    constructor(name){
      super(name);
      this.type = "Zombie";
      this.attack = 40;
      this.defence = 10;
    }
  }
  function levelUP(character){
    if(character.health > 0){
      character.level++;
      character.attack = character.attack + character.attack * 0.2;
      character.defence = character.defence + character.defence * 0.2;
      character.health = 100;
    } else{
      throw new Error("Не можешь повысить уровень умершего");
    }
  };
  function damage(character, point){
    if(character.health > 0){
      character.health = character.health - point * (1 - character.defence / 100);
    } else{
      throw new Error("Не можешь нанести урон умершему");
    }
  }