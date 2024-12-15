import Link from "@/GameFlix - Next.js/node_modules/next/link";
import Styles from "./menubutton.module.css"

export default function Menubutton({ text, href, active }) {
      if (active) {
            return (
                  <Link href={href} className={`${Styles.active} ${Styles.button}`}>
                        {text}
                  </Link>
            )
      }
      else { 
            return (
                  <Link href={href} className={`${Styles.button}`}>
                        {text}
                  </Link>
            )
      }
}