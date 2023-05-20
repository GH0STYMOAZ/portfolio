import React, { useEffect } from "react";
const Dot = function (x, y) {
  this.x = x;
  this.y = y;
  this.add = function (w) {
    this.x += w.x;
    this.y += w.y;
    return this;
  };
  this.min = function (w) {
    this.x -= w.x;
    this.y -= w.y;
    return this;
  };
};

Math.radians = function (degrees) {
  return (degrees * Math.PI) / 180;
};

Math.degrees = function (radians) {
  return (radians * 180) / Math.PI;
};

Math.get_deg_between = function (a, b) {
  var deg = Math.degrees(Math.atan2(a.x - b.x, a.y - b.y)) * -1 - 90;
  return deg < 0 ? 360 + deg : deg;
};

const getRelativeDot = (m, deg, dist) => {
  return new Dot(
    m.x + Math.cos(Math.radians(deg)) * dist,
    m.y + Math.sin(Math.radians(deg)) * dist
  );
};

const Eyes = () => {
  useEffect(() => {
    const myFunction = (e) => {
      var mouse = new Dot(e.clientX, e.clientY);
      var eyes = document.getElementsByClassName("eye");
      for (let i = 0; i < eyes.length; i++) {
        var eye = eyes[i];
        var eye_position = getPosition(eye);
        var eye_mid = new Dot(eye.offsetWidth / 2, eye.offsetWidth / 2);
        var pill = eye.querySelector(".pill");
        var degrees = Math.get_deg_between(eye_position, mouse);
        var distance = eye.offsetWidth / 2 - pill.offsetWidth / 2;
        var new_pill = getRelativeDot(eye_mid, degrees, distance);
        var minus = new Dot(pill.offsetWidth / 2, pill.offsetWidth / 2);
        new_pill.min(minus);
        pill.style.top = new_pill.y + "px";
        pill.style.left = new_pill.x + "px";
      }
    };

    document.addEventListener("mousemove", myFunction);

    return () => {
      document.removeEventListener("mousemove", myFunction);
    };
  }, []);

  const getPosition = (el) => {
    var x = 0;
    var y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return new Dot(x, y);
  };
  return (
    <div className="four_eyes">
      <div class="eye_one">
        <div class="eye eye_left">
          <div class="pill"></div>
        </div>
        <div class="eye eye_right">
          <div class="pill"></div>
        </div>
      </div>

      <div class="eye_two">
        <div class="eye eye_left">
          <div class="pill"></div>
        </div>
        <div class="eye eye_right">
          <div class="pill"></div>
        </div>
      </div>

      <div class="eye_three">
        <div class="eye eye_left">
          <div class="pill"></div>
        </div>
        <div class="eye eye_right">
          <div class="pill"></div>
        </div>
      </div>

      <div class="eye_four">
        <div class="eye eye_left">
          <div class="pill"></div>
        </div>
        <div class="eye eye_right">
          <div class="pill"></div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
