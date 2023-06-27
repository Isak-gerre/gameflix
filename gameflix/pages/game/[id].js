import { getGameData, getGameScreenchots, getGameTrailers } from "@/components/functions/getGames";
import Layout from "@/components/layout/layout";
import Styles from "@/styles/Gameview.module.css"
import Head from "next/head"

export async function getServerSideProps({ params }) {
	const gameData = await getGameData(params.id, process.env.API_KEY);
	const gameScreenshots = await getGameScreenchots(params.id, process.env.API_KEY);
	const gameTrailers = await getGameTrailers(params.id, process.env.API_KEY);
	return {
		props: {
			gameData: gameData,
			gameScreenshots: gameScreenshots,
			gameTrailers: gameTrailers
		},
	};
}

function DescriptionText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p className={`${Styles.description_text}`}>{str}</p>);
}

export default function Page({ gameData, gameScreenshots, gameTrailer }) {
	console.log(gameScreenshots);
	console.log(gameTrailer);
	return (
		<Layout>
			<Head>
				<title>Gameflix: {gameData.name}</title>
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
			<section className={`${Styles.game_container}`}>
				<div className={`${Styles.hero}`}>
					<div className={`${Styles.image} ${Styles.bg_img}`} style={{ backgroundImage: `url(${gameData.background_image})` }} alt="Game background image" />
					<div className={`${Styles.overlay}`}></div>
				</div>
				<div className={`${Styles.game_information_container}`}>
					<div className={`${Styles.game_information_hero_container}`}>
						<div className={`${Styles.hero_image_container}`}>
							<img className={`${Styles.image}`} src={ `${gameData.background_image}` } alt="Game background image"/>
						</div>
						<div className={`${Styles.main_info_container}`}>
							<p className={`${Styles.title}`}>{gameData.name}</p>
							<div className={`${Styles.genres}`}>
								{gameData.genres.map((genre, index) => (
									<p key={index} className={`${Styles.info_text}`}>{genre.name} </p>
								))}
							</div>
							<p className={`${Styles.info_text}`}>{ gameData.developers[0].name}</p>
							<p className={`${Styles.info_text}`}>Metascore: {gameData.metacritic}</p>
							<div className={`${Styles.platforms_container}`}>
								{gameData.parent_platforms.map((platform,index) => (
									<img src={`/images/platforms/${platform.platform.name}.png`} alt="platform"/>
									
								))}
							</div>
						</div>
						<div className={`${Styles.buttons_container}`}>
							<div className={`${Styles.button} ${Styles.primary}`}>
								<p>Add to playlist</p>
							</div>
							<div className={`${Styles.button}`}>
								<p>Write a review</p>
							</div>
						</div>
					</div>
				</div>
				<div className={`${Styles.description_container}`}>
					<div className={`${Styles.description_text_container}`}>
						<p className={`${Styles.description_header_text}`}>Description</p>
						<DescriptionText text={gameData.description_raw}></DescriptionText>
					</div>
					<div className={`${Styles.description_trailers_container}`}>
						<p className={`${Styles.description_header_text}`}>Trailers and Screenshots</p>
						<div className={`${Styles.screenshots_container}`}>
							{gameScreenshots.results.map(({ image }) => (
								<a href={image} target="_blank"><img className={`${Styles.screenshot}`} src={ image }/></a>
							))}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
