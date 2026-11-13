class City {
  constructor(name) {
    this.name = name;
    this.adjacent_vertices = {};
  }

  addAdjacentCity(city, distnce) {
    this.adjacent_vertices[city.name] = distnce;
  }

  removeAdjacentCity(city) {
    delete this.adjacent_vertices[city.name];
  }
}

class Prim {
  constructor() {
    this.all_cities = {};
  }
  registerCity(city) {
    this.all_cities[city.name] = city;
  }

  // 최단 경로를 계산
  MST(start_city) {
    let visited_cities = {};
    let unvisited_cities = {};
    let mst_table = {};

    for (let city_name in this.all_cities) {
      unvisited_cities[city_name] = this.all_cities[city_name];
    }

    if (unvisited_cities[start_city.name] == null) {
      console.log("출발 도시가 등록되어 있지 않습니다.");
      return null;
    } else {
      for (let city_name in unvisited_cities) {
        // shortest_path_table[city_name] = Infinity;
        mst_table[city_name] = { distance: Infinity, city: null };
      }
    }

    mst_table[start_city.name].distance = 0;

    //     // console.log(Object.keys(unvisited_cities));

    while (Object.keys(unvisited_cities).length > 0) {
      let closest_city_name = null;

      for (let city_name in unvisited_cities) {
        if (
          closest_city_name == null ||
          mst_table[city_name].distance < mst_table[closest_city_name].distance
        ) {
          closest_city_name = city_name;
        }
      }
      visited_cities[closest_city_name] = unvisited_cities[closest_city_name];
      delete unvisited_cities[closest_city_name];

      for (let adjacent_city_name in visited_cities[closest_city_name]
        .adjacent_vertices) {
        if (unvisited_cities[adjacent_city_name] == null) {
          continue;
        }
        let distnce =
          visited_cities[closest_city_name].distance +
          adjacent_city_name[closest_city_name];

        if (mst_table[adjacent_city_name].distance > distnce) {
          mst_table[adjacent_city_name].distance = distnce;
          mst_table[adjacent_city_name].city =
            visited_cities[closest_city_name];
        }
      }
    }

    console.log(mst_table);
    // console.log(path_string);
    //     return shortest_path_table[end_city.name];
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
deajeon.addAdjacentCity(jeonju, 56);
deajeon.addAdjacentCity(deagu, 112);

jeonju.addAdjacentCity(seoul, 187);
jeonju.addAdjacentCity(deajeon, 56);
jeonju.addAdjacentCity(deagu, 130);

deagu.addAdjacentCity(wonju, 176);
deagu.addAdjacentCity(gangneung, 212);
deagu.addAdjacentCity(deajeon, 122);
deagu.addAdjacentCity(jeonju, 130);

let prim = new Prim();
prim.registerCity(seoul);
prim.registerCity(wonju);
prim.registerCity(gangneung);
prim.registerCity(deajeon);
prim.registerCity(jeonju);
prim.registerCity(deagu);

console.log(prim.MST(seoul));
