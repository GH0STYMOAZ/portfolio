import React, { useEffect } from "react";
import styles from "@/app/styles/Skills.module.css";

// ICONS
import { MdOutlineWeb, MdArrowRightAlt, MdCancel, MdCheckCircleOutline } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { HiOutlineColorSwatch } from "react-icons/hi";

const Services = () => {
    useEffect(() => {
    const modalViews = document.querySelectorAll('.services__modal'),
          modalBtns = document.querySelectorAll('.services__button'),
          modalClose = document.querySelectorAll('.services__modal-close');

    let modal = function(modalClick) {
      modalViews[modalClick].classList.add('active-modal');
    }

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener('click', () => {
        modal(i);
      });
    });

    modalClose.forEach((modalClose) => {
      modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
          modalViews.classList.remove('active-modal');
        });
      });
    });
  }, []);
  return (
    <section className="services_section" id="services">
    <h2 className="services_main__title">Services</h2>
    {/* <sapn className="services__subtitle">What i offer</sapn> */}

    <div className="services_grid">
        {/* <!-- SERVICES 1  --> */}
        <div className="services__content">
            <div>
                <i className="services__icon"><MdOutlineWeb/></i>
                <h3 className="services__title">Ui/Ux <br/> Designer</h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
                View More
                <i className="button__icon"><MdArrowRightAlt/></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                   <h4 className="services__modal-title"> Ui/Ux <br/> Designer</h4>
                   <i className="services__modal-close"><MdCancel/></i>
                   <ul className="services__modal-services">
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I develop the user interface.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>Web page development.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I create ux element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I position your company brand.</p>
                        </li>
                   </ul>
                </div>
            </div>
        </div>

        {/* <!-- SERVICES 2  --> */}
        <div className="services__content">
            <div>
                <i className="services__icon"><BiCodeCurly/></i>
                <h3 className="services__title">Frontend <br/> Developer</h3>
            </div>

            <span className="services__button">
                View More
                <i className="uil uil-arrow-right button__icon"><MdArrowRightAlt/></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                   <h4 className="services__modal-title"> Frontend <br/> Developer</h4>
                   <i className="services__modal-close"><MdCancel/></i>

                   <ul className="services__modal-services">
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I develop the user interface.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>Web page development.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I create ux element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I position your company brand.</p>
                        </li>
                   </ul>
                </div>
            </div>
        </div>

        {/* <!-- SERVICES 3  --> */}
        <div className="services__content">
            <div>
                <i className="services__icon"><BsPencilFill/></i>
                <h3 className="services__title">Branding <br/> Designer</h3>
            </div>

            <span className="services__button">
                View More
                <i className="button__icon"><MdArrowRightAlt/></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                   <h4 className="services__modal-title">Branding <br/> Designer</h4>
                   <i className="services__modal-close"><MdCancel/></i>

                   <ul className="services__modal-services">
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I develop the user interface.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>Web page development.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I create ux element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="services__modal-icon"><MdCheckCircleOutline/></i>
                            <p>I position your company brand.</p>
                        </li>
                   </ul>
                </div>
            </div>
        </div>
        {/* <div className="ending_line_three"></div> */}
    </div>
</section>

  );
};

export default Services;
