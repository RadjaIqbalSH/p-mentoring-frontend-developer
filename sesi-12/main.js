/**
 * Jeni jenis console
 */

// console.log("Hallo World");
// console.warn("Hallo World");
// console.error("Error 1");
// console.table({
//   name: "HsirisH",
//   age: 1
// })
// console.info("Info");
// console.count("Hallo");

/**
 * Function
 */

function sum() {
  return 10 + 2;
}
// console.log("hasil function sum => ", sum())

/**
 * function + parameter
*/
const nilai1 = 10
const nilai2 = 2
const nilai3 = 10;
const nilai4 = 5;

// function tambahan(param5) {
//   return 5 + param5
// }

// function childHallo (param3) {
//   return param3;
// }

// function halloWorld1(param1, param3, param2) {
//   return param1 + childHallo(param2) + param3;
// };

// console.log("Nilai = ", halloWorld1(1,2,tambahan(6)))

// declaration func
function exampleFunc (param1) {
  console.log("Kapal => ", param1);
};

// arrow func
const exampleFunc2 = () => {
  console.log("Mobil");
};

// expression func
const exampleFunc3 = function () {
  console.log("Pesawat");
};

// Sebuah function yang bertujuan untuk menghasilkan sesuatu
function withReturn (qty, price) {
  console.log("Function with return")

  const totalBelanja = qty * price

  if (qty < 1) {
    return "Tidak Valid";
  }

  if (totalBelanja > 100000) {
    return totalBelanjaWithDiscount = totalBelanja - 20000
  } else {
    return totalBelanja
  }
}


// Sebuah function yang bertujuan untuk melakukan suatu tugas
function withoutReturn () {

  const element = document.getElementById("parap")

  if (!element) return; 

  document.getElementById("parap").textContent = "Sudah di Klik"

}

withoutReturn();

// document.getElementById("btn").addEventListener("click", withoutReturn)
// document.getElementById("btn2").addEventListener("click", withoutReturn)


// const resultFuncWithReturn = withReturn(0 , 30000);
// const resultFuncWithoutReturn = withoutReturn();


// console.log("resultFuncWithReturn => ", resultFuncWithReturn)
// console.log("resultFuncWithoutReturn => ", resultFuncWithoutReturn)

// exampleFunc();
// exampleFunc2();
// exampleFunc3();

// const example = halloWorld1;

// function sum(param1, param2, param3) {
//   console.log("type data 1 => ", typeof param1)
//   console.log("type data 2 => ", typeof param2)
//   console.log("type data 3 => ", param3)
// }

// sum("Jhon", 50, halloWorld1());

// console.log("hasil function sum 2-1  => ", sum())

/**
 * Jenis jenis function
 * 
 */

// declaration function
function thisIsDeclarationFunction () {
  console.log("Hallo World")
}

// Expression function
const thisIsExpressionFunction = function () {

}

// Arrow function
const thisIsArrowFunction = () => {
  console.log("thisIsArrowFunction -> ", this)
}

/**
 * 
 * Callback function
 */

function callbackFunc () {
  console.log("Hallo World")
}

function thisIsCallbackFunction (param1) {
  param1();
}

// thisIsCallbackFunction(callbackFunc)


/**
 * 
 * Type data Array
 * 
 */

const dataDiri = {
  nama : "Jhon",
  age: 50,
  gender: ["Laki Laki", "Perempuan"],
  location: {
    city: "Jakarta",
    postalCode: "20141",
    house: {
      color: "red",
      number: 12
    }
  },
  exampleFunc: function () {
    console.log("example function")
  }
}

// dataDiri.exampleFunc();

// console.log("Gender => ", dataDiri.gender[1])
// console.log("data diri age => ", dataDiri.age)
// console.log("data diri nama => ", dataDiri.nama)
// console.log("data diri city => ", dataDiri.location.city)
// console.log("data diri nomor rumah => ", dataDiri.location.house.number)

const product = {
  name: "Sunscreen",
  price: 12000,
  stock: 100,
  isDiscount: true,
};

/**
 * 
 * Type data array
 * 
 */

const example = [
  "car", 
  "house", 
  "paint", 
  ["cat", "dog"], 
  {
    nama : "Jhon",
    age: 50,
    gender: "Laki Laki",
  },
  function () {
    console.log("Hallo World")
  }
]

// for (let i = 1; i < 5; i++) {
//   console.log("Loop => ", i)
// }

let a = 1

// while (a < 5) {
//   console.log("while ==> ", a);
//   a = a + 1;
// }

// console.log("example -> ", example[0])
// console.log("example -> ", example[1])
// console.log("example -> ", example[2])
// console.log("example -> ", example[3][1])
// console.log("example -> ", example[4].gender)

// example[5]();

const listNumber = ["car","house","food","cat"];
const tempListNumber = []
let index = 0

for (const bucket of listNumber) {
  // break;

  // if (bucket === "food") {
  //   break;
  // }

  console.log("bucket value => ", bucket)
  tempListNumber[index] = "name -> " + bucket
  index++
}

console.log("tempListNumber => ", tempListNumber)

listNumber.forEach(function (value, index) {
  // console.log("For Each value => ", value)
  // console.log("For Each index => ", index)
})

listNumber.map(function(value, index) {
  console.log("map value => ", value)
  console.log("map index => ", index)
})

const mapListNumber = listNumber.map(function(value) {
  return "name > " + value
})

console.log("mapListNumber -> ", mapListNumber)

