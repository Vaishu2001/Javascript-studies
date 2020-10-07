//working with sets
//order is not maintained,duplicated not allowed,cannot access through index
const loginId = new Set([1,2,3,4])
if(loginId.has(2)){
    loginId.add(5);
    loginId.add(5);
}
console.log(loginId);
