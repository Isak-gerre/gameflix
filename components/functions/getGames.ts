export async function useGamesData(slug = "genre=action") {
	const key = process.env.API_KEY;
	const res = await fetch(`https://api.rawg.io/api/games?key=${key}&${slug}`);
	return res.json();
}
export async function useGenres() {
	const key = process.env.API_KEY;
	const res = await fetch(`https://api.rawg.io/api/genres?key=${key}`);
	return res.json();
}
export async function useAllGenres() {
	const key = process.env.API_KEY;
	const res = await fetch(`https://api.rawg.io/api/genres?key=${key}`);
	return res.json();
}
export async function useGameData(id: string ) {
	const key = process.env.API_KEY;
	const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${key}`);
	return res.json();
}
export async function useGameScreenchots(id: string ) {
	const key = process.env.API_KEY;
	const res = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${key}`);
	return res.json();
}
export async function useGameTrailers(id: string ) {
	const key = process.env.API_KEY;
	const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${key}`);
	return res.json();
}
