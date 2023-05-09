import React, { useEffect } from "react";
import styles from "@/app/styles/Skills.module.css";

// ICONS
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { HiOutlineColorSwatch } from "react-icons/hi";

const Skills = () => {

    {/* =========  DROPDOWN OF SKILLS ========= */}
    useEffect(() => {
        const skillsContent = document.getElementsByClassName('skills_content');
        const skillsHeader = document.querySelectorAll('.skills__header');
    
        const toggleSkills = function() {
          let itemClass = this.parentNode.className;
    
          for (let i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills_content skills__close';
          }
    
          if (itemClass === 'skills_content skills__close') {
            this.parentNode.className = 'skills_content skills_open';
          }
        };
    
        skillsHeader.forEach((eL) => {
          eL.addEventListener('click', toggleSkills);
        });
    
        return () => {
          skillsHeader.forEach((eL) => {
            eL.removeEventListener('click', toggleSkills);
          });
        };
      }, []);
  return (
    <section className={styles.skills_section}>
                <h1 className={styles.skills_title}>Skills</h1>
                {/* <span className={styles.skills_subtitle}>My Technical Level</span> */}

                <div className={styles.skills_container}>
                    <div className={styles.skills_grid}>
                       {/* =========  SKILL ONE ========= */}
                        <div className="skills_content skills_open">
                            <div className="skills__header">
                                <i className={styles.skills__icon}><BiCodeCurly/></i>

                                <div>
                                    <h1 className={styles.skills__title}>Frontend Developer</h1>
                                    <span className={styles.skills__subtitle}>More then 4 years</span>
                                </div>

                                <i className="skills__arrow"><MdOutlineKeyboardArrowDown/></i>
                            </div>

                            <div className={`skills__list grid`}>
                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>HTML</h3>
                                        <span className={styles.skills__number}>90%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__html}`}></span>
                                    </div>
                                </div>

                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>CSS</h3>
                                        <span className={styles.skills__number}>80%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__css}`}></span>
                                    </div>
                                </div>

                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>JavaScript</h3>
                                        <span className={styles.skills__number}>60%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__js}`}></span>
                                    </div>
                                </div>

                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>React</h3>
                                        <span className={styles.skills__number}>80%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__react}`}></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =========  SKILL TWO ========= */}
                        <div className="skills_content skills__close">
                            <div className="skills__header">
                                <i className={styles.skills__icon}><BsServer/></i>

                                <div>
                                    <h1 className={styles.skills__title}>Backend Developer</h1>
                                    <span className={styles.skills__subtitle}>More then 2 years</span>
                                </div>

                                <i className="skills__arrow"><MdOutlineKeyboardArrowDown/></i>
                            </div>

                            <div className={`skills__list grid`}>
                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>PHP</h3>
                                        <span className={styles.skills__number}>80%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__php}`}></span>
                                    </div>
                                </div>

                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>Node Js</h3>
                                        <span className={styles.skills__number}>70%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__node}`}></span>
                                    </div>
                                </div>

                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>Firebase</h3>
                                        <span className={styles.skills__number}>90%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__firebase}`}></span>
                                    </div>
                                </div>

                                <div className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}>Python</h3>
                                        <span className={styles.skills__number}>55%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={`${styles.skills__percentage} ${styles.skills__python}`}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* =========  SKILL THREE ========= */}
                        <div>
                            <div className="skills_content skills__close">
                                <div className="skills__header">
                                    <i className={styles.skills__icon}><HiOutlineColorSwatch/></i>

                                    <div>
                                        <h1 className={styles.skills__title}>Designer</h1>
                                        <span className={styles.skills__subtitle}>More then 5 years</span>
                                    </div>

                                    <i className="skills__arrow"><MdOutlineKeyboardArrowDown/></i>
                                </div>

                                <div className={`skills__list grid`}>
                                    <div className={styles.skills__data}>
                                        <div className={styles.skills__titles}>
                                            <h3 className={styles.skills__name}>Figma</h3>
                                            <span className={styles.skills__number}>90%</span>
                                        </div>
                                        <div className={styles.skills__bar}>
                                            <span className={`${styles.skills__percentage} ${styles.skills__figma}`}></span>
                                        </div>
                                    </div>

                                    <div className={styles.skills__data}>
                                        <div className={styles.skills__titles}>
                                            <h3 className={styles.skills__name}>Sketch</h3>
                                            <span className={styles.skills__number}>85%</span>
                                        </div>
                                        <div className={styles.skills__bar}>
                                            <span className={`${styles.skills__percentage} ${styles.skills__sketch}`}></span>
                                        </div>
                                    </div>

                                    <div className={styles.skills__data}>
                                        <div className={styles.skills__titles}>
                                            <h3 className={styles.skills__name}>Photoshop</h3>
                                            <span className={styles.skills__number}>85%</span>
                                        </div>
                                        <div className={styles.skills__bar}>
                                            <span className={`${styles.skills__percentage} ${styles.skills__photoshop}`}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="ending_line_three"></div>
                    </div>

                </div>
            </section>
  )
}

export default Skills