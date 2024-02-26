import { Rubik } from "next/font/google";
import Links from "./links/Links";
import styles from "./nav.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";

const fontLogo = Rubik({
  subsets: ["latin"],
  weight: "700",
});
const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo} ${fontLogo.className}`}>
        LOGO
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
