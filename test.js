var a = [];
for(var i=0;i<10;i++){
  (a[i] = function(){
    console.log(i);
  })()
}
a[9]();

function test(){
  let a = 1;
    a = 2;
  console.log(a);
}
test();


console.log(new Date(...[2015, 1, 1]));
console.log(...[1,2,3]);
const arr1 = [1,2,3];
const arr2 = arr1;
// const arr2 = [...arr1];
console.log(arr2);
arr2[0] = 0;
console.log(arr2);
console.log(arr1);
console.log(arr1 === arr2);



// const arr3 = [1,2];
// const arr4 = [3,4];
// const arr5 = [...arr3,...arr4];
// console.log(arr5);
// arr5[1] = 0;
// console.log(arr3);


var obj1 = {
  name: 'andy',
  sex: 'man',
  old: '18'
}
var obj2 = {...obj1}
// obj1.old = '22'
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
