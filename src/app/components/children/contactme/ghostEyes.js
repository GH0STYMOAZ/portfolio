"use client";
import React, { useEffect } from "react";

const eyeRadius = 40; // pupil max posistion - percentage from center
const maxPupilDistanceFromCenter = 45; // pupil max posistion - percentage from center

function moveEyes(event) {
  const ghosteyes = document.querySelectorAll(".js-eye");
  const pupils = document.querySelectorAll(".js-pupil");
  let offset = rightBetweenTheEyes(ghosteyes);
  let x = ((event.clientX - offset.x) / window.innerWidth) * 100;
  let y = ((event.clientY - offset.y) / window.innerHeight) * 100;
  let pupilDistanceFromCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (pupilDistanceFromCenter >= maxPupilDistanceFromCenter) {
    // if pupil out of eye - dont panic
    let angle = Math.atan(x / y);
    let adjustedX = Math.sin(angle) * maxPupilDistanceFromCenter;
    let adjustedY = Math.cos(angle) * maxPupilDistanceFromCenter;

    if (y < 0) {
      x = adjustedX * -1;
      y = adjustedY * -1;
    } else {
      x = adjustedX;
      y = adjustedY;
    }
  }

  pupils.forEach((p) => {
    p.style.left = x + 50 + "%"; // 50 is beacuse 50% is css center
    p.style.top = y + 50 + "%";
  });
}

function rightBetweenTheEyes(ghosteyes) {
  let offset = { x: 0, y: 0 };
  let eye0Left = ghosteyes[0].getBoundingClientRect().left;
  let eye0Top = ghosteyes[0].getBoundingClientRect().top;
  let eye1Left = ghosteyes[1].getBoundingClientRect().left;
  let eye1Top = ghosteyes[1].getBoundingClientRect().top;

  offset.x = (eye0Left + eye1Left) / 2 + eyeRadius;
  offset.y = (eye0Top + eye1Top) / 2 + eyeRadius;

  return offset;
}

const GhostEyes = () => {
  useEffect(() => {
    document.addEventListener("mousemove", moveEyes);
    return () => {
      document.removeEventListener("mousemove", moveEyes);
    };
  }, []);

  return (
    <div className="ghost">
      <div className="ghosteyes">
        <div className="ghosteye eye--left js-eye">
          <div className="pupil js-pupil"></div>
        </div>

        <div className="ghosteye eye--right js-eye">
          <div className="pupil js-pupil"></div>
        </div>
      </div>
    </div>
  );
};

export default GhostEyes;
