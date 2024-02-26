"use client";
import { useState } from "react";
import styles from "./link.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const links = [
  {
    name: "Homepage",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];
const Links = ({ session }) => {
  const [open, setOpne] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.name} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ name: "Admin", url: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ name: "Login", url: "/login" }} />
        )}
      </div>
      <div>
        <Image
          src="/menu.png"
          className={styles.menuButton}
          alt=""
          height={30}
          width={30}
          onClick={() => setOpne((prev) => !prev)}
        />
        {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink item={link} key={link.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;
