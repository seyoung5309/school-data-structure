class City {
  constructor(name) {
    this.name = name;
    this.addjacent = {};
  }

  addAdjacentCity(city, distnce) {
    this.adjacent_vertices[vertex.value] = weight;
  }

  removeAdjacentCity(city) {
    delete this.adjacent_vertices[city.value];
  }
}

class Dijkstra {}

let seoul = new City("서울");
let wonju = new City("원주");
let gangneung = new City("강릉");
let deajeon = new City("대전");
let jeonju = new City("전주");
let deagu = new City("대구");

seoul.addAdjacentCity(wonju, 87);
seoul.addAdjacentCity(gangneung, 165);
seoul.addAdjacentCity(deajeon, 140);
seoul.addAdjacentCity(jeonju, 187);

wonju.addAdjacentCity(seoul, 87);
wonju.addAdjacentCity(gangneung, 95);
wonju.addAdjacentCity(deajeon, 118);
wonju.addAdjacentCity(deagu, 178);

deaeon.addAdjacentCity(seoul, 140);
deaeon.addAdjacentCity(gangneung, 118);
deaeon.addAdjacentCity(deajeon, 56);
deaeon.addAdjacentCity(deagu, 112);

jeonju.addAdjacentCity(seoul, 187);
jeonju.addAdjacentCity(deajeon, 56);
jeonju.addAdjacentCity(deagu, 130);

deagu.addAdjacentCity(wonju, 176);
deagu.addAdjacentCity(gangneung, 212);
deagu.addAdjacentCity(deajeon, 122);
deagu.addAdjacentCity(
  jeonju,
  `까먹음
`,
);
