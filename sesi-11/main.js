// console.log("Hallo World from main.js")

// Variable

const x = 1;
const z = 1;

// x = 2

let y = 1;
y = 2;

let hasilPenjumlahan = 0;
console.log("hasilPenjumlahan 1 => ", hasilPenjumlahan);

hasilPenjumlahan = x + z;
console.log("hasilPenjumlahan 2 => ", hasilPenjumlahan);

hasilPenjumlahan = x + z + y;
console.log("hasilPenjumlahan 3 => ", hasilPenjumlahan);

hasilPenjumlahan = hasilPenjumlahan + 1;
console.log("hasilPenjumlahan 4 => ", hasilPenjumlahan);

// type data

// string
const nama = "Jhon Doe";
console.log("nama => ", nama);
console.log("tipe data dari nama => ", typeof nama);

// boolean
const isActive = false;
console.log("isActive => ", isActive);
console.log("tipe data dari isActive => ", typeof isActive);

// number
let nomorBiasa = 9007199254740991;

nomorBiasa = nomorBiasa + 6;

console.log("nomorBiasa => ", nomorBiasa);
console.log("tipe data dari nomorBiasa => ", typeof nomorBiasa);
// cuma bisa handle 2 pangkat 57

// bigint

// let nomorBesar = BigInt(9007199254740991)
let nomorBesar = 9007199254740991n;

// nomorBesar = nomorBesar + BigInt(10)
nomorBesar = nomorBesar + 1n;

console.log("nomorBesar => ", nomorBesar);
console.log("tipe data dari nomorBesar => ", typeof nomorBesar);

console.log("============ Data Product ===============");

let productName = "Keyboard Mechanical";
// let price = 150000;
// let qty = 1;
let promoMin = 300000;
const potonganPromo = 2000;

let g = 1;

function hitungTotalBelanja(qty, price) {
	console.log("============ Start ===============");
	// total pembelian
	const subtotal = qty * price;

	// check active promo
	const isPromoActive = subtotal >= promoMin;

	// ternary oprator
	let discount = subtotal >= 200000 ? 0.1 : subtotal >= 150000 ? 0.05 : 0;

	let finalTotal;

	if (isPromoActive) {
		finalTotal = subtotal - subtotal * discount - potonganPromo;
	} else {
		finalTotal = subtotal - subtotal * discount;
	}

	console.log("subtotal => ", subtotal);
	console.log("discount => ", discount);
	console.log("finalTotal => ", finalTotal);

	console.log("============ End ===============");

	return finalTotal;
}

console.log("Total Bayar anda : ", hitungTotalBelanja(200000, 2));
console.log("Total Bayar anda g : ", g);
// console.log("Total Bayar anda : ", hitungTotalBelanja(200000, 3))
// console.log("Total Bayar anda : ", hitungTotalBelanja(200000, 4))
// console.log("Total Bayar anda : ", hitungTotalBelanja(200000, 5))
