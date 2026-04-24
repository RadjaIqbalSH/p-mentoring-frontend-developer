const products = [
  {
    id: 1,
    name: "Mouse Gaming",
    price: 300000,
    stock: 10,
  },
  {
    id: 2,
    name: "Monitor Gaming",
    price: 1300000,
    stock: 2
  },
  {
    id: 3,
    name: "Keyboard Gaming",
    price: 450000,
    stock: 3
  },
  {
    id: 4,
    name: "PC Gaming",
    price: 10000000,
    stock: 2
  },
]

// Search using for of

// let searchResult = {}

// for (const value of products) {
//   if (value.id === 3) {
//     searchResult = value
//   }
// }

// console.log("search result => ", searchResult)

// Search using find

function findProduct(value) {

  if (value.id === 3) {
    return value
  }

  return undefined
}

const searchResult = products.find(findProduct)

// console.log("searchResult => ", searchResult)

// Search using filter

const filterResult = products.filter((value) => value.price > 1000000)

// console.log("filterResult => ", filterResult)

// Map manipulating index value

const mapResult = products.map((value) => {

  value.needRestock = false

  if (value.stock < 5) {
    value.needRestock = true
  }

  return value
})

// console.log("mapResult => ", mapResult)

// Reduce untuk menjumlahkan stock dari products

const reduceResult = products.reduce((current, value) => value.stock + current, 0);

console.log("reduceResult => ", reduceResult)



