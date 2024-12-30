import Link from "next/link";
import Styles from "./menubutton.module.css"

interface Props {
      text: string;
      href: string;
      active?: boolean;
}

export default function Menubutton({ text, href, active = false }: Props) {
      if (active) {
            return (
                  <Link href={href} className={`${Styles.active} ${Styles.button}`}>
                        {text}
                  </Link>
            )
      }
      else { 
            return (
                  <Link href={href} className={`${Styles.button} whitespace-nowrap`}>
                        {text}
                  </Link>
            )
      }
}