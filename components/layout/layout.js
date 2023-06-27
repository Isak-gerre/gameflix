import Head from "next/head";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import Styles from ".//layout.module.css";

const name = "Your Name";
export const siteTitle = "Gameflix";

export default function Layout({ children, home }) {
	return (
		<div className={`${Styles.container}`}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Menu className={`${Styles.header}`}></Menu>
			<main>{children}</main>
			<Footer></Footer>
		</div>
	);
}
