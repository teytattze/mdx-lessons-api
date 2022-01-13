import { ASCENDING_ORDER } from '../constants/sort.const.js';

export const getSortedArrayOfObject = (arr, key, options) => {
	const asc = (a, b) => {
		if (a[key] > b[key]) return 1;
		if (a[key] < b[key]) return -1;
		return 0;
	};

	const desc = (a, b) => {
		if (a[key] > b[key]) return -1;
		if (a[key] < b[key]) return 1;
		return 0;
	};

	return options.order === ASCENDING_ORDER ? arr.sort(asc) : arr.sort(desc);
};

export const getTruncatedString = (str, length) => {
	if (str.length <= length) {
		return str;
	}
	return `${str.substring(0, length)}...`;
};

export const getItemAndIndexFromArray = (arr, id) => {
	const index = arr.findIndex((item) => item.id === id);
	if (index !== -1) {
		return {
			index,
			data: arr[index],
		};
	}
	return {
		index,
		data: arr[index],
	};
};
