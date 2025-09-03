import userImage from './assets/user-image.png'

import styles from './Styles.module.scss'

export function UserIdentification() {

    return (

        <div className={styles.rootWrappper_UserIdentification}>
            <img src={userImage} alt="User profile image." />
            Derp
        </div>
    )

}