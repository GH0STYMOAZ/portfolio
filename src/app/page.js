"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Page.module.css";
import { useEffect, useRef } from "react";
import Navigation from "./components/Navigation";

const Home = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    imgRef.current.style.opacity = 1;
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      if (cursor.classList.contains("hover")) {
        cursor.setAttribute(
          "style",
          `top: ${e.pageY - 57}px; left: ${e.pageX - 57}px;`
        );
      } else {
        cursor.setAttribute(
          "style",
          `top: ${e.pageY - 27}px; left: ${e.pageX - 27}px;`
        );
      }
    });

    // ======== CURSOR EXPAND EFFECT ON CLICK ======== //
    document.addEventListener("click", () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });

    // ======== CURSOR HOVER EFFECT ON LINK ======== //
    const cursorHoverLinks = document.querySelectorAll(".cursor-hover-link");
    cursorHoverLinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        cursor.classList.add("hover");
      });
      link.addEventListener("mouseout", () => {
        cursor.classList.remove("hover");
      });
    });
  }, []);

  return (
    <>
      <main>
        <div className={styles.home_container}>
          <div className={styles.home_col_one}>
            <Navigation />
            <div className="cursor"></div>

            {/* ===== COPYRIGHT ===== */}
            <div className={styles.home_copyright}>
              <p>&copy; HISHAM HUSSAIN</p>
            </div>
          </div>

          {/* ===== BACKGROUND & HOME INFO===== */}
          <div className={styles.home_col_two}>
            <div className={styles.home_bg_fade}></div>
            <div ref={imgRef} className={styles.home_bg_img}>
              <Image
                src="/imgs/bgimg1.png"
                alt="background image"
                width={1200}
                height={840}
              />
            </div>

            <div className={styles.home_info}>
              <div className={styles.row_one}>
                <p className={styles.text_one}>
                  <span className="bracket">&#x7B;</span> PORTFOLIO{" "}
                  <span className="bracket">&#125;</span>
                </p>
                <p className={styles.text_two}>HISHAM.H</p>
              </div>
              <div className={styles.row_two}>
                <p className={styles.text_three}>GRAPHIC DESIGNER & VISUALS</p>
                <p className={styles.text_four}>
                  <span className="bracket">&#x7B;</span> BASED-IN-PAKISTAN{" "}
                  <span className="bracket">&#125;</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.home_col_three}></div>
        </div>
      </main>
    </>
  );
};

export default Home;
