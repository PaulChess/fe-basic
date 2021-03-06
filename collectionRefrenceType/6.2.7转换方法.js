/**
 * toLocalString()
 * toString() 返回由数组中每个值的等效字符串拼接而成的一个由逗号分隔的字符串
 * valueOf() 返回数组本身
 */


let colors = ['red', 'blue', 'yellow', false, 124];

console.log(colors.toString()); // red,blue,yellow,false,124
console.log(colors.valueOf()); // [ 'red', 'blue', 'yellow', false, 124 ]
console.log(colors); // ['red', 'blue', 'yellow', false, 124]

// alert(colors); // 因为alert期待字符串，所以会默认调用toString方法

// toLocaleString
// 调用数组的toLocaleString方法时会先得到一个逗号分隔的数组值的字符串，类似于toString, 为了得到最终的字符串还会调用数组中每个值的toLocaleString方法
let person1 = {
  toLocaleString() {
    return 'Nickolas';
  },

  toString() {
    return 'Nicholas';
  }
}

let person2 = {
  toLocaleString() {
    return 'Gregorios';
  },

  toString() {
    return 'Greg';
  }
}

let people = [person1, person2];
console.log(people);
console.log(people.toString()); // Nicholas,Greg
console.log(people.toLocaleString());