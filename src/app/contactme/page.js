"use client";
import React from "react";
import ContactmeForm from "../components/children/contactme/contactmeForm";
import { CustomCursor } from "../components/customCursor";
import Navigation from "../components/Navigation";
import GhostEyes from "../components/children/contactme/ghostEyes";
import Eyes from "../components/children/contactme/eyes";
import BackgroundFade from "../components/backgroundFade";
const ContactMe = () => {
  return (
    <>
      <div className="contactme_section">
        <Eyes />
        <GhostEyes />
        <CustomCursor />
        <Navigation />
        {/* <BackgroundFade /> */}
        <div className="cm_form">
          <ContactmeForm />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
