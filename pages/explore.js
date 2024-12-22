import Layout from "@/components/layout/layout";
import Head from "next/head";
import Styles from "@/styles/Explore.module.css";
import { getGamesData, getGenres } from "@/components/functions/getGames";
import Gamecard from "@/components/cards/gamecard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

async function getGamesFromGenres(array) {
	const games = await array.results.map(async (genre) => {
		return await getGamesData(process.env.API_KEY, genre.slug)
	})
	return Promise.all(games)
}

export async function getStaticProps() {
	const key = process.env.API_KEY;
	const genres = await getGenres(key);
	const allgames = await getGamesFromGenres(genres);
	const allInfo = allgames.map((games, index) => {
		return {
			games,
			genre: genres.results[index]
		}
	});
	return {
		props: {
			allInfo
		},
	};
}

export default function Explore({allInfo }) {
	// console.log(data);
	console.log(allInfo);
	return (
		<Layout>
			<Head>
				<title>Explore</title>
				<meta name="description" content="Gameflix Social Media application" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<section className={Styles.main}>
				<div className={Styles.header_container}>
					<h1 className={Styles.header_text}>Popular Games</h1>
				</div>
				<div className={Styles.header_text}>

				</div>
				{allInfo.map(({games, genre}) => (
					<div className={Styles.genre_container}>
						<div className={Styles.genre_title}>
							<h3>{genre.name}</h3>
						</div>
						<div className={Styles.genre_cards}>
							{games.results.map((game) => (
								<Gamecard href={`/game/${game.slug}`} name={game.name} bg={game.background_image} genres={game.genres}></Gamecard>
							))}
						</div>
					</div>
				))}
			</section>
		</Layout>
	);
}
