import { filterGenero } from '../src/data.js';

const data = [
  {
    age: 21,
    event: "Taekwondo Women's Flyweight",
    gender: "F",
    height: "165",
    medal: "Bronze",
    name: "Patimat Abakarova",
    noc: "AZE",
    sport: "Taekwondo",
    team: "Azerbaijan",
    weight: "49"
  },
  {
    age: 31,
    event: "Rowing Women's Quadruple Sculls",
    gender: "F",
    height: "172",
    medal: "Silver",
    name: "Chantal Achterberg",
    noc: "NED",
    sport: "Rowing",
    team: "Netherlands",
    weight: "72"
  },
  {
    age: 21,
    event: "Rowing Men's Coxless Pairs",
    gender: "M",
    height: "198",
    medal: "Bronze",
    name: "Giovanni Abagnale",
    noc: "ITA",
    sport: "Rowing",
    team: "Italy",
    weight: "90",
  }
]
describe('filterGenero', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterGenero).toBe('function');
  });

  it('returns `filterGenero`', () => {
    expect(filterGenero(data,'M')).toEqual([{
    age: 21,
    event: "Rowing Men's Coxless Pairs",
    gender: "M",
    height: "198",
    medal: "Bronze",
    name: "Giovanni Abagnale",
    noc: "ITA",
    sport: "Rowing",
    team: "Italy",
    weight: "90"
  }]);
  });
});


//describe('anotherExample', () => {
  //it('is a function', () => {
    //expect(typeof anotherExample).toBe('function');
  //});

  //it('returns `anotherExample`', () => {
    //expect(anotherExample()).toBe('OMG');
  //});
//});
