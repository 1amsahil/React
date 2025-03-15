import musicin from "../../assets/musicin.png"
import Projectcard from "../../common/Projectcard/Projectcard"
import Heading from "../../common/Heading/Heading"
import styles from "./Projects.module.css"

export default function Projects()
{
    return <>
            <div className={styles['project']} >
                    <Heading headingname={"PROJECTS"} />
                <div className={styles['project-container']}>
                   <Projectcard src={musicin} title={"MusicIn"} para={"Music Streaming App"} />
                   <Projectcard src={musicin} title={"JobTrap"} para={"Job App"} />
                   <Projectcard src={musicin} title={"MusicIn"} para={"Music Streaming App"} />
                   <Projectcard src={musicin} title={"MusicIn"} para={"Music Streaming App"} />
                </div>
            </div>
    </>
}