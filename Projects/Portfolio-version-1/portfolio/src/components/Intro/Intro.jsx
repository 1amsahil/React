import linkedin from "../../assets/linkedin-svg.svg"
import leetcode from "../../assets/leetcode-svg.svg"
import github from "../../assets/github-svg.svg"
import profile from "../../assets/profile.jpg"
import resume from "../../assets/resume.pdf"
import styles from './Intro.module.css';


export default function Intro()
{
    return<div className={styles['intro-container']}>
        <div className={styles['intro-info']}>
            <h2 className={styles['name']}>Mohd Sahil </h2>
            <h2 className={styles['dev-type']}>Software Developer</h2>

            <div className={styles['social-handles']}>
                <a href="https://www.linkedin.com/in/mohd-sahil-jh24/" target="_blank">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/1amsahil" target="_blank">
                    <img src={github} alt="linkedin"/>
                </a>
                <a href="https://leetcode.com/u/iamEternity/" target="_blank">
                    <img src={leetcode} alt="linkedin"/>
                </a>
            </div>

            <p className={styles['intro-para']}>
                Experienced in building dynamic web applications using React for front-end development and Java with Spring for back-end services. Skilled in creating responsive user interfaces and developing scalable, high-performance back-end.
            </p>

            <a href={resume} download>
                <button className={styles['resume-btn']} >Resume</button>
            </a>
        </div>

        <div className={styles['img-container']} >
            <img src={profile} className={styles['profile-img']} />
        </div>
    </div>
}
