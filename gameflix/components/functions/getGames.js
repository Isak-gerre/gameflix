export async function getGamesData(key, genre = "action") {
	console.log(key);
	const res = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=${genre}`);
	return res.json();
}
export async function getGenres(key) {
	console.log(key);
	const res = await fetch(`https://api.rawg.io/api/genres?key=${key}`);
	return res.json();
}
export async function getGameData(id, key) {
	console.log(key);
	const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${key}`);
	return res.json();
}
export async function getGameScreenchots(id, key) {
	console.log(key);
	const res = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${key}`);
	return res.json();
}
export async function getGameTrailers(id, key) {
	console.log(key);
	const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${key}`);
	return res.json();
}
