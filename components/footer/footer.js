import Styles from "./footer.module.css";
import Menubutton from "../buttons/menu_buttons";

export default function Footer() {
	return (
		<footer className={`${Styles.footer}`}>
                  <div className={`${Styles.footer_hero}`}>
                        <h2 className={`${Styles.h2}`}>Gameflix.</h2>
                        <h4 className={`${Styles.h4}`}>Built with Next.js and RAWG API.</h4>
                        <h4 className={`${Styles.h4}`}>By Isak Gerre.</h4>
                  </div>
                  <div className={`${Styles.footer_navigation}`}>
                        <div className={`${Styles.right}`}>
                              <Menubutton text="Dashboard" href="/"></Menubutton>
                              <Menubutton text="Popular Games" href="/"></Menubutton>
                              <Menubutton text="Newly added" href="/"></Menubutton>
                        </div>
                        <div className={`${Styles.left}`}>
                              <Menubutton text="Content Creator" href="https://isakgerre.se"></Menubutton>
                        </div>

                  </div>
                  <div className={`${Styles.copyright}`}>
                        <p>© Copyright 2023, All rights Reserved</p>
                  </div>
		</footer>
	);
}
