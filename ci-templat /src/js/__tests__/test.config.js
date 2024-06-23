import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
test('should create a new Character', () => {
  const character = new Character('John', 'Warrior');
  expect(character.name).toBe('John');
  expect(character.type).toBe('Warrior');
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

test('should create a new Swordsman', () => {
  const swordsman = new Swordsman('John');
  expect(swordsman.name).toBe('John');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('should create a new Magician', () => {
  const magician = new Magician('John');
  expect(magician.name).toBe('John');
  expect(magician.type).toBe('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('should create a new Undead', () => {
  const undead = new Undead('John');
  expect(undead.name).toBe('John');
  expect(undead.type).toBe('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('should create a new Zombie', () => {
  const zombie = new Zombie('John');
  expect(zombie.name).toBe('John');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});

test('should level up a character', () => {
  const character = new Character('John', 'Warrior');
  levelUP(character);
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
});