export function findAndIncrementCartItemByMealId(carts, mealId) {
	carts.map(cart => {
		if (cart.mealId === mealId) {
			console.log(cart);
			incrementAndDecrementCartItemByOne(cart, "INCREMENT");
		}
	})
}

export function findAndDecrementCartItemByMealId(carts, mealId) {
	carts.map(cart => {
		if (cart.mealId === mealId) {
			incrementAndDecrementCartItemByOne(cart, "DECREMENT");
		}
	})
}

function incrementAndDecrementCartItemByOne(cart, type) {
	let quantity = null;
	switch (type.toUpperCase()) {
		case "INCREMENT":
			quantity = Number.parseInt(cart.quantity) + 1;
			break;
		case "DECREMENT":
			quantity = Number.parseInt(cart.quantity) - 1;
			break;
	}
	cart.quantity = quantity + "";
}

export function pushItemintoCart(state, payload) {
	const existingItem = state.cart.find(c => c.mealId == payload.mealId);
	if (existingItem)
		existingItem.quantity = (parseInt(existingItem.quantity) || 0) + (parseInt(payload.quantity) || 1);
	else {
		state.cart.push({
			...payload,
			quantity: "1"
		});
	}
}