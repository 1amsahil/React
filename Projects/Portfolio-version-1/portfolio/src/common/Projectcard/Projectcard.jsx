import styles from './Projectcard.module.css'

export default function Projectcard({src, title, para})
{
    return <div className={styles['project-container']}>
        <div className={styles['project-card']}>    
            <div className={styles['img-container']}>
                <img src={src}  className={styles['project-img']} />
            </div>

            <div className={styles['project-title']}>
                <h2>{title}</h2>
                <p >{para}</p>
            </div>

        </div>
</div>
}