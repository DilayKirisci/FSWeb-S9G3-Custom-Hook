import { useState } from "react";

export default function localStorageKullan(key, baslangicDegeri) {
	const [state, setState] = useState(() => {
		const storage = localStorage.getItem(key);
		return storage ? JSON.parse(storage) : baslangicDegeri;
	});

	function updateStorage(value) {
		localStorage.setItem(key, JSON.stringify(value));
		setState(value);
	}

	return [state, updateStorage];
}
