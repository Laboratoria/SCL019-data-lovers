import { describe, it } from 'eslint/lib/rule-tester/rule-tester';

import { filterGenero,filterSport,filterNoc, ordenarAZ } from '../src/data.js';


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
//test para filtro por genero 
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

// test para filtro por deporte 
describe('filterSport', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterSport).toBe('function');
  });

  it('returns `filterSport`', () => {
    expect(filterSport(data,'Taekwondo')).toEqual([{
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
  }]);
  });
});

//test para filtro de paises 
describe('filterNoc', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterNoc).toBe('function');
  });

  it('returns `filterNoc`', () => {
    expect(filterNoc(data,'ITA')).toEqual([{
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

//test para ordenar AZ 
describe('Funcion ordenarAZ', () => {
  it('deberia ser una function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('Debería retornar nombres de los atletas ordenados alfabeticamentre', () => {
    
    let ordenarAz = ordenarAZ(data);

    expect(ordenarAz[0].name).toBe('Chantal Achterberg');
    expect(ordenarAz[1].name).toBe('Giovanni Abagnale');
    expect(ordenarAz[2].name).toBe('Patimat Abakarova');
});

})
