import React from "react";
import Link from "next/link";
import styles from "@/app/styles/Aboutme.module.css";

// ICONS
import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaDownload,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    // <div className={`aboutmeContainer ${isProfileVisible ? "show" : ""}`}>
    <div className={styles.aboutme_section}>
      <h1 className={styles.aboutme_headingn}>About Me</h1>
      <section className={styles.aboutme_grid}>

        {/* =========  SOCIALS SECTIOn ========= */}
        <div className="ending_line_one"></div>
        <div className={styles.aboutme_socials}>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className={styles.aboutme_social_icon}
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instafram.com/"
            target="_blank"
            className={styles.aboutme_social_icon}
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.discord.com/"
            target="_blank"
            className={styles.aboutme_social_icon}
          >
            <FaDiscord />
          </Link>
        </div>

        {/* =========  INFORMATION SECTION ========= */}
        <div className={styles.aboutme_information}>
          <h2 className={styles.aboutme_info_heading}>Hi,&#73;&apos;am Moaz</h2>

          <div className={styles.info_para}>
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </div>

          <div className={styles.aboutme_exp}>
            <div className={styles.exp_col_one}>
              <span className={styles.aboutme__exp_title}>08+</span>
              <br />
              <span className={styles.aboutme__info_name}>
                Years <br /> experience
              </span>
            </div>
            <div className={styles.exp_col_one}>
              <span className={styles.aboutme__exp_title}>20+</span>
              <br />
              <span className={styles.aboutme__info_name}>
                Completed <br /> Projrct
              </span>
            </div>
            <div className={styles.exp_col_one}>
              <span className={styles.aboutme__exp_title}>05+</span>
              <br />
              <span className={styles.aboutme__info_name}>
                Companies <br /> Worked
              </span>
            </div>
          </div>

          <div className={styles.download_cv_botton}>
            <a download="" href="/pdf/Alexa-Cv.pdf" class="button button--flex">
              Download CV <FaDownload />
            </a>
          </div>
        </div>

        {/* =========  BLOB SECTION ========= */}
        <div className={styles.aboutme_blob}>
          <svg
            className={styles.home__blob}
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                className={styles.home__blob_img}
                x="-60"
                y="15"
                xlinkHref="/imgs/perfil.png"
              />
            </g>
          </svg>
        </div>
        <div className="ending_line_two"></div>
      </section>
    </div>
    // </div>
  );
};

export default AboutMe;
