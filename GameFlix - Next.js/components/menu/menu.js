import Styles from ".//menu.module.css";
import Menubutton from "../buttons/menu_buttons";

export default function Menu() {
	return (
		<nav className={`${Styles.nav}`}>
			<div className={`${Styles.menucontent}`}>
				<div className={`${Styles.logo}`}>
					<p>Gameflix.</p>
				</div>
				<div className={`${Styles.menu}`}>
					<Menubutton text="Popular Games" href="/" active></Menubutton>
					<Menubutton text="Dashboard" href="/"></Menubutton>
					<p className={`${Styles.menutitle}`}>Browse</p>
					<Menubutton text="Popular Games" href="/"></Menubutton>
					<Menubutton text="Newly added" href="/newlyadded"></Menubutton>
					<Menubutton text="Search" href="/search"></Menubutton>
					<p className={`${Styles.menutitle}`}>Genres</p>
					<Menubutton text="Action" href="/genre/action"></Menubutton>
					<Menubutton text="Adventure" href="/genre/adventure"></Menubutton>
					<Menubutton text="RPG" href="/genre/rpg"></Menubutton>
					<Menubutton text="Shooter" href="/genre/shooter"></Menubutton>
				</div>
				<div className={`${Styles.menu}`}>
					<Menubutton text="Settings" href="/"></Menubutton>
					<Menubutton text="Logout" href="/"></Menubutton>
				</div>
			</div>
		</nav>
	);
}
