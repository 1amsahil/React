import SkillList from "../../common/SkillList/SkillList"
import Heading from "../../common/Heading/Heading"
import styles from "./Skills.module.css"

export default function Skills()
{
    return<>
    <div  className={styles["skills-container"]}>
        
        <Heading headingname={"SKILLS"} />

        <div className={styles["skill-subcontainer"]}>
            
            <div className={styles[""]} > </div>

            <div className={styles["skills-list"]}  >

                <div className={styles["skills-section"]}>
                    <h2>Frontend </h2>
                    <SkillList skillname={"HTML"} percentage={"85%"} />        
                    <SkillList skillname={"CSS"} percentage={"85%"} />        
                    <SkillList skillname={"JS"} percentage={"80%"} />        
                    <SkillList skillname={"ReactJS"} percentage={"75%"} />        
                </div>

                <div className={styles["skills-section"]}>
                <h2>Backend</h2>
                    <SkillList skillname={"Java"} percentage={"80%"} />        
                    <SkillList skillname={"Spring"} percentage={"70%"} />         
                </div>

            </div>
                       
        </div>

    </div>
    </>
}