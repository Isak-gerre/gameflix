import Styles from "../styles/Search.module.css"
import Layout from "@/components/layout/layout";
import Head from "next/head";
import { getGamesData } from "@/components/functions/getGames";
import { useState } from "react";
import Gamecard from "@/components/cards/gamecard";


export async function getStaticProps() {
	const id = process.env.API_KEY;
	return {
		props: {
                  id
		},
	};
}


export default function Search({ id }) {
      const [data, setData] = useState([]);

      async function searchGames(event) {
            if (event.target.value.length > 2) {
                  console.log(id);
                  const results = await getGamesData(id, `search=${event.target.value}`);
                  console.log(results);
                  setData(results.results);
            }
            if (event.target.value.length == 0) {
                  const results = await getGamesData(id);
                  setData(results.results);
            }

      }
      
      return (
            <Layout>
			<Head>
				<title>Gameflix: Search</title>
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
                  <div className={Styles.search_container}>
                        <input type="text" onChange={ searchGames } className={Styles.searchbar} placeholder="Search Games"/>
                  </div>
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
		</Layout>
      );
}