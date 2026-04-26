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

const findProductById = (id) => {
	const findResult = products.find((product) => product.id === id);

	if (findResult) {
		return findResult;
	}

	return undefined;
};

const cart1 = [
	{
		idProduct: 1,
		qty: 1,
	},
	{
		idProduct: 3,
		qty: 2,
	},
];

const cart3 = [
	{
		idProduct: 2,
		qty: 3,
	},
	{
		idProduct: 3,
		qty: 1,
	},
];

/**
 *
 * fungsi ini tujuannya untuk menghitung total
 * dari cart dimna rumusnya adalah (qty * price)
 *
 */
function getSubTotal(data) {
	const reduceResult = data.reduce((current, value) => {
		const detailProduct = findProductById(value.idProduct); // cari detail product

		const sumPrice = detailProduct.price * value.qty + current;

		return sumPrice;
	}, 0);

	return reduceResult;
}

console.log("getSubTotal(cart1); => ", getSubTotal(cart1));

const getDiscount = (param1, param2) => {
	const subTotal = getSubTotal(param1);

	if (param2 && subTotal >= 100000) {
		return (subTotal / 100) * 10;
	}

	return 0;
};

const getOngkir = (param1) => {
	const subTotal = getSubTotal(param1);

	if (subTotal >= 150000) {
		return 0;
	}

	return 15000;
};

const getCartTotal = (param1, param2) => {
	const total =
		getSubTotal(param1) - getDiscount(param1, param2) + getOngkir(param1);

	return total;
};

const isMember1 = true;

const cart2 = [
	{
		idProduct: 1,
		qty: 1,
	},
	{
		idProduct: 4,
		qty: 1,
	},
];
const isMember2 = false;

// const cart3 = [
// 	{
// 		idProduct: 2,
// 		qty: 3,
// 	},
// 	{
// 		idProduct: 10,
// 		qty: 1,
// 	},
// ];
const isMember3 = true;

// console.log("total belanja => ", getCartTotal(cart3))
