// 감시 모드
// tsc farmstand.ts --watch
// tsc farmstand.ts -w
interface Product {
	price: number,
	name: string,
	quantity: number,
}

const printProduct = (product:Product): void => {
	console.log(`${product.name} - $${product.price}, 수량: ${product.quantity}`)
}
printProduct({name: 'Eggs', price: 2.99, quantity: 10})