import Head from "next/head";
import Styles from "../styles/Explore.module.css";
import { useGamesData, useGenres } from "components/functions/getGames";
import Gamecard from "components/cards/gamecard";
import Carousel from "../components/cards/Carousel";

async function getGamesFromGenres(array: any[]) {
  const games = await Promise.all(
    array.map(async (genre) => {
      return useGamesData( genre.slug);
    })
  );
  return games;
}

export default async function ExplorePage() {
  const genres = await useGenres();
  const allgames = await getGamesFromGenres(genres.results);
  const allInfo = allgames.map((games, index) => ({
    games,
    genre: genres.results[index],
  }));

  return (
    <>
      <Head>
        <title>Explore</title>
        <meta
          name="description"
          content="Gameflix Social Media application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800&display=swap"
          rel="stylesheet"
        />
      </Head>
          <h1 className=" bg-red-500">Popular Games</h1>
      <section className={Styles.main}>
        <div className={Styles.header_container}>
        </div>
        <div className={Styles.header_text}></div>
        {allInfo.map(({ games, genre }, index) => (
          <div className={Styles.genre_container} key={`${genre.id}-${index}`}>
            <div className={Styles.genre_title}>
              <h3>{genre.name}</h3>
            </div>
            <Carousel games={games.results} />
          </div>
        ))}
      </section>
    </>
  );
}