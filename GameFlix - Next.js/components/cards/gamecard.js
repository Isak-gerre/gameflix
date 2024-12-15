import Styles from ".//gamecard.module.css";
import Link from "@/GameFlix - Next.js/node_modules/next/link";

export default function Gamecard(props) {
	return (
		<Link
			style={{ backgroundImage: `url(${props.bg})`, textDecoration: "none" }}
			className={Styles.game_card}
			href={props.href}
		>
			<div className={Styles.overlay}></div>
			<p className={Styles.game_title}>{props.name}</p>
			<div className={Styles.genre_container}>
				{props.genres.map((genre, index) => {
					if (index < 3) {
						return <p className={Styles.genres}>{genre.name}</p>;
					}
				})}
			</div>
		</Link>
	);
}
