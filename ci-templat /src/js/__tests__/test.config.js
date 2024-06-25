import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
test('should create a new Character with valid name and type', () => {
  const character = new Character('John', 'Bowman');
  expect(character.name).toBe('John');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});

test('should throw an error for invalid name in Character constructor', () => {
  expect(() => new Character('J', 'Bowman')).toThrow('Переписывай');
});

test('should throw an error for invalid type in Character constructor', () => {
  expect(() => new Character('John', 'Warrior')).toThrow('Недопустимый тип персонажа');
});

test('should create a new Bowman', () => {
  const bowman = new Bowman('Robin');
  expect(bowman.name).toBe('Robin');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('should create a new Swordsman', () => {
  const swordsman = new Swordsman('Arthur');
  expect(swordsman.name).toBe('Arthur');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});


test('should create a new Magician', () => {
  const magician = new Magician('Merlin');
  expect(magician.name).toBe('Merlin');
  expect(magician.type).toBe('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('should create a new Undead', () => {
  const undead = new Undead('Dracula');
  expect(undead.name).toBe('Dracula');
  expect(undead.type).toBe('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

describe('Zombie', () => {
test('should create a new Zombie', () => {
  const zombie = new Zombie('Zack');
  expect(zombie.name).toBe('Zack');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});
});

test('should level up a character', () => {
  const character = new Character('Alice', 'Swordsman');
  levelUP(character);
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
  expect(character.attack).toBe(30); // 25 + 25 * 0.2
  expect(character.defence).toBe(30); // 25 + 25 * 0.2

test('should throw an error if trying to level up a dead character', () => {
  const character = new Character('Eve', 'Undead');
  character.health = 0;
  expect(() => levelUP(character)).toThrow('Не можешь повысить уровень умершего');
});
});
test('should damage a character', () => {
  const character = new Character('Bob', 'Magician');
  damage(character, 50);
  expect(character.health).toBe(50); // 100 - 50 * (1 - 40 / 100)
});

test('should throw an error if trying to damage a dead character', () => {
  const character = new Character('Alex', 'Zombie');
  character.health = 0;
  expect(() => damage(character, 50)).toThrow('Не можешь нанести урон умершему');
});
