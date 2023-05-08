"use client";
import React from "react";
import styles from "@/app/styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <header>
        {/* ===== LOGO ===== */}
        <div className={styles.nav_logo}>
          <Link className="cursor-hover-link" href={"/"}>
            <Image src="/imgs/logo.png" alt="logo" width={60} height={60} />
          </Link>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className={styles.navigation}>
          <div className={`${styles.nav_links} ${styles.link_profile}`}>
            <Link
              className={`${styles.nav_link} cursor-hover-link`}
              href={"/profile"}
            >
              PROFILE
            </Link>
          </div>
          <div className={`${styles.nav_links} ${styles.link_wroks}`}>
            <Link
              className={`${styles.nav_link} cursor-hover-link`}
              href={"/works"}
            >
              WORKS
            </Link>
          </div>
          <div className={`${styles.nav_links} ${styles.link_contactme}`}>
            <Link
              className={`${styles.nav_link} cursor-hover-link`}
              href={"/contactme"}
            >
              CONTACT ME
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
