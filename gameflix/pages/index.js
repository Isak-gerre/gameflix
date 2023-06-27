import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout, {siteTitle} from "@/components/layout/layout";


export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
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
      <main className={`${styles.main}`}>
        <p className={`${styles.header_2}`}>Hello world</p>
      </main>
		</Layout>
	);
}
