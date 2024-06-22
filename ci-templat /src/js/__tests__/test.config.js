import Character from "../app.js";
test('should create a new Character', () => {
    const character = new Character('John');
    expect(character.name).toBe('John');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should create a new Bowman', () => {
    const bowman = new Bowman('John');
    expect(bowman.name).toBe('John');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('should level up a character', () => {
    const character = new Character('John');
    levelUP(character);
    expect(character.level).toBe(2);
    expect(character.health).toBe(100);
    expect(character.attack).toBe(30); // 25 + 25 * 0.2
    expect(character.defence).toBe(30); // 25 + 25 * 0.2
  });

  test('should damage a character', () => {
    const character = new Character('John');
    damage(character, 50);
    expect(character.health).toBe(50); // 100 - 50 * (1 - 25 / 100)
  });

  test('should throw an error if trying to level up a dead character', () => {
    const character = new Character('John');
    character.health = 0;
    expect(() => levelUP(character)).toThrow('Не можешь повысить уровень умершего');
  });

  test('should throw an error if trying to damage a dead character', () => {
    const character = new Character('John');
    character.health = 0;
    expect(() => damage(character, 50)).toThrow('Не можешь нанести урон умершему');
  });


