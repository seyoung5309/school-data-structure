// 시험 문제

function hanoi(count, from, to, temp) {
  if (count <= 0) {
    return "끝";
  }
  hanoi(count - 1, from, temp, to);
  console.log(`원반${count}을 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
} // hanoi

hanoi(3, "A", "C", "B");
