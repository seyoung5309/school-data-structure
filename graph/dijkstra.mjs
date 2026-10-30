class City {
  constructor(name) {
    this.name = name;
    this.adjacent_vertices = {};
  }

  addAdjacentCity(city, distnce) {
    this.adjacent_vertices[city.value] = distnce;
  }

  removeAdjacentCity(city) {
    delete this.adjacent_vertices[city.value];
  }
}

class Dijkstra {
  constructor() {
    this.all_cities = {};
  }
  registerCity(city) {
    this.all_cities[city.name] = city;
  }

  // 최단 경로를 계산
  shortestPath(start_city, end_city) {
    let visited_cities = {};
    let unvisited_cities = {};
    let shortest_path_table = {};

    for (let city_name in this.all_cities) {
      unvisited_cities[city_name] = this.all_cities[city_name];
    }

    if (unvisited_cities[start_city] == null) {
      console.log("출발 도시가 등록되어 있지 않습니다.");
      return null;
    } else {
      for (let city_name in unvisited_cities) {
        shortest_path_table[city_name] = Infinity;
      }
    }
    shortest_path_table[start_city] = 0;

    // console.log(Object.keys(unvisited_cities));

    while (Object.keys(unvisited_cities).length > 0) {
      let closest_city_name = null;

      for (let city_name in unvisited_cities) {
        if (
          closest_city_name == null ||
          shortest_path_table[city_name] <
            shortest_path_table[closest_city_name]
        ) {
          closest_city_name = city_name;
        }
      }
      visited_cities[closest_city_name] = unvisited_cities[closest_city_name];
      delete unvisited_cities[closest_city_name];

      for (let adjacent_city_name in visited_cities[closest_city_name]
        .adjacent_cities) {
        if (unvisited_cities[adjacent_city_name] == null) {
          continue;
        }
        let distnce =
          shortest_path_table[closest_city_name] +
          visited_cities[closest_city_name].adjacent_cities[adjacent_city_name];

        if (shortest_path_table[adjacent_city_name] > distnce) {
          shortest_path_table[adjacent_city_name] = distnce;
        }
      }
    }
  }
}

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

deajeon.addAdjacentCity(seoul, 140);
deajeon.addAdjacentCity(gangneung, 118);
deajeon.addAdjacentCity(deajeon, 56);
deajeon.addAdjacentCity(deagu, 112);

jeonju.addAdjacentCity(seoul, 187);
jeonju.addAdjacentCity(deajeon, 56);
jeonju.addAdjacentCity(deagu, 130);

deagu.addAdjacentCity(wonju, 176);
deagu.addAdjacentCity(gangneung, 212);
deagu.addAdjacentCity(deajeon, 122);
deagu.addAdjacentCity(jeonju, 130);

let dijkstra = new Dijkstra();
dijkstra.registerCity(seoul);
dijkstra.registerCity(wonju);
dijkstra.registerCity(gangneung);
dijkstra.registerCity(deajeon);
dijkstra.registerCity(jeonju);
dijkstra.registerCity(deagu);

dijkstra.shortestPath(seoul, deagu);
