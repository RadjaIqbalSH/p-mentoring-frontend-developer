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
		stock: 2,
	},
	{
		id: 3,
		name: "Keyboard Gaming",
		price: 450000,
		stock: 3,
	},
	{
		id: 4,
		name: "PC Gaming",
		price: 10000000,
		stock: 2,
	},
];

// Search using for of

// let searchResult = {}

// for (const value of products) {
//   if (value.id === 3) {
//     searchResult = value
//   }
// }

// console.log("search result => ", searchResult)

// Search using find

function findProducts(product, index) {
	if (product.id === 2) {
		return true;
	} else {
		return false;
	}
}

const searchResult = products.find(findProducts);

// console.log("searchResult => ", searchResult);

// Search using filter

function filterProducts(product, index) {
	if (product.price > 1000000) {
		return true;
	} else {
		return false;
	}
}

const filterResult = products.filter(filterProducts);

// console.log("filterResult => ", filterResult);

// Map manipulating index value

const mapResult = products.map((product) => {
	product.needRestock = false;

	if (product.stock < 5) {
		product.needRestock = true;
	}

	return product;
});

// console.log("mapResult => ", mapResult)

// Reduce untuk menjumlahkan stock dari products

const reduceResult = products.reduce(
	(current, value) => value.stock + current,
	0
);

// console.log("reduceResult => ", reduceResult);
