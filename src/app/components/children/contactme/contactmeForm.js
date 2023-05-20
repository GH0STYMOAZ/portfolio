import React from "react";

const ContactmeForm = () => {
  return (
    <>
      <div className="cm_container">
        <div className="cm_data">
          <div className="cm_data_content">
            <div className="cm_blob">
              <svg
                className="cm_svg"
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
                    className="cm__blob_img"
                    x="-60"
                    y="15"
                    xlinkHref="/imgs/perfil.png"
                  />
                </g>
              </svg>
            </div>

            <div className="cm_data_data">
              <p>
                Experienced graphic designer skilled in creating visually
                compelling designs for logos, advertisements, and other
                marketing materials.
              </p>
            </div>
          </div>
        </div>
        <div className="cmForm_form">
          <div className="form">
            <h1>Send us Your Project Details</h1>
            <div class="group">
              <input type="text" required />
              <span class="highlight"></span>
              <label>Name</label>
            </div>
            <div class="group">
              <input type="text" required />
              <span class="highlight"></span>
              <label>Email</label>
            </div>
            <div class="group">
              <textarea type="text" required placeholder="Message" />
              <span class="highlight"></span>
            </div>
            {/* <a class="send-btn">Send</a> */}
            <button class="form_submit">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactmeForm;
