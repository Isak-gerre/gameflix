import Layout from "@/components/layout/layout";
import Head from "next/head";
import Styles from "@/styles/Newlyadded.module.css";
import { getGamesData, getGenres } from "@/components/functions/getGames";
import Gamecard from "@/components/cards/gamecard";
import { useState } from "react";

export async function getServerSideProps({ params }) {
	const id = process.env.API_KEY;
	console.log(id);
	const games = await getGamesData(id, `genre=${params}`);
	return {
		props: {
			games,
			id: id,
			params,
		},
	};
}

export default function Newlyadded({ games, id, params }) {
	const [data, setData] = useState(games.results);
	const [page, setPage] = useState(2);
	console.log(id);

	async function handleLoadMore() {}

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
				<div className={Styles.header_text}></div>
				<div className={Styles.genre_container}>
					<div className={Styles.genre_cards}>
						{data.map((game) => (
							<Gamecard
								href={`/game/${game.slug}`}
								name={game.name}
								bg={game.background_image}
								genres={game.genres}
							></Gamecard>
						))}
					</div>
					<div
						onClick={async () => {
							setPage(page + 1);
							const games = await getGamesData(id, `genre=${params}&page=${page}`);
							setData(data.concat(games.results));
							console.log(data);
						}}
						className={`${Styles.active} ${Styles.button}`}
					>
						Load more
					</div>
				</div>
			</section>
		</Layout>
	);
}
