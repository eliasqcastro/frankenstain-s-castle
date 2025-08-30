import { ContentArea } from '../components/content-area/ContentArea'
import { DisplayedContent } from './cpnts/displayed-content/DisplayedContent'
import { SideBar } from './cpnts/side-bar/SideBar'
import styles from './Styles.module.scss'

export function RootScreen() {

    return (

        <div className={styles.rootWrapper_Home}>

            <ContentArea>

                <SideBar />
                
                <DisplayedContent/>
                
            </ContentArea>

        </div>
    )
}