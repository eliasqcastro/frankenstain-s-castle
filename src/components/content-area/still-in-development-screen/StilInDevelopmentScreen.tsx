import imageMeme from './assets/meme-image.jpg'
import styles from './Styles.module.scss'

export function StilInDevelopmentScreen() {

    return(

        <div className={styles.rootWrapper_StilInDevelopmentScreen}>

            <p>Still in development!</p>

            <img src={imageMeme} alt="Meme image." />

        </div>
    )
}