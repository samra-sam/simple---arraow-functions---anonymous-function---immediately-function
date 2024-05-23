//simple function
function simple(name: string, name1: string) {
  console.log(`hellow\n${name}\n${name1}`);
}
simple("samra", "hameed");

//arraow function
let arraow = (name2: string, name3: string) => {
  console.log(`\nhellow \n${name2}\n${name3}`);
  console.log("This is arraow function\n");
};
arraow("alizah", "hania");

//agr single line code ho tou{} ye lagane ki bhi zarurat nh hoti
let arraow2 = (name4: string, name5: string) =>
  console.log(`\nhellow \n${name4}\n${name5}`);
arraow2("kinza", "nimra");

//arraow function main return krna
let arraow3 = () => "\ngood morning";
console.log(arraow3());

//anonymous function
let anonymous = function () {
  console.log("\nThis is a anonymous function");
};
anonymous();

//immediately invoked function
(function () {
  console.log("\nThis is a immediately invoked function");
})();
