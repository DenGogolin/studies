const intDiv = (a, b = 2) => Math.floor(a / b);

const purchase = (m, w, total, price) => {
	let max = m > w ? m : w;
	let min = m <= w ? m : w;
	const dif = max - min;
	let itemsToBuy = intDiv(total, price);
	if (itemsToBuy) {
		total -= itemsToBuy * price;

		if (dif >= itemsToBuy) {
			min += itemsToBuy;
		} else {
			min += dif;
			itemsToBuy -= dif;
			max += intDiv(itemsToBuy);
			min += intDiv(itemsToBuy);
			if (itemsToBuy % 2) {
				max += 1;
			}
		}
	}

	return { m: max, w: min, total };
};

const candyGame = (m, w, price, goal) => {
	const stepsLeft = x => Math.ceil(x / m / w);
	let total = 0,
		pass = 1;

	while (total < goal) {
		total += m * w;
		const nextBuy = stepsLeft(price - total);
		if (total < price) {
			total += m * w * nextBuy;
			pass += nextBuy;
		}
		const steps = stepsLeft(goal - total);
        if (steps <= nextBuy) {
            return pass + steps;
        }
		({ m, w, total } = purchase(m, w, total, price));
		const newSteps = stepsLeft(goal - total);
		if (steps < newSteps) {
			return pass + steps;
		}
		pass++;
	}

	return pass;
};

module.exports = {
	candyGame
};
