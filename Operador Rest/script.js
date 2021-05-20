

function addUsers(nomes, ...users) {
  let newUsers = [
    ...nomes,
    ...users,
  ];
  return newUsers;
}
let nomes = ["Wiuver", "Ayeska"];
let res = addUsers(nomes, "Luiz", "Lara", "Isabella");

console.log(res);