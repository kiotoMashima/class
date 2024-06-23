export default class Character{
    constructor(name){
      if(name === undefined || name.lenght < 2 || name.lenght >10){
        throw new Error("Переписывай");
      }
      this.name = name;
      this.health = 100;
      this.level = 1;
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