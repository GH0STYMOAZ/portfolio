"use client";
import React from "react";
import Navigation from "../components/Navigation";
import styles from "@/app/styles/Profile.module.css";
import { CustomCursor } from "../components/customCursor";
import BackgroundFade from "../components/backgroundFade";
import AboutMe from "../components/children/profile/aboutMe";
import EnterProfile from "../components/children/profile/enterProfile";
import Skills from "../components/children/profile/skills";
import Services from "../components/children/profile/services";

const Profile = () => {
  return (
    <>
    <div className={styles.profile_overflow}>
      <div className={styles.profile_container}>
        <CustomCursor />
        <Navigation />
        <BackgroundFade />
        <div className={styles.profile}>
          <h1 className={styles.profile_heading}>PROFILE</h1>
          
          {/* ===== ENTER PROFILE ===== */}
          {/* <div className="enter_profile">
            <EnterProfile/>
          </div> */}

           {/* ===== ABOUT ME ===== */}
          <div className="aboutmeContainer">
            <AboutMe />
          </div>

           {/* ===== SKILLS ===== */}
          <div className="skillsContainer">
           <Skills/>
          </div>

           {/* ===== SERVICES ===== */}
          <div className="skillsContainer">
           <Services/>
          </div>


        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;
