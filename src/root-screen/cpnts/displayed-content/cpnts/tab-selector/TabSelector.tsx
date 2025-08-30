import { ContentsForDisplay } from "../../state/displayed-content-store";
import { Tab } from "./cpnts/Tab";

import styles from './Styles.module.scss'

export function TabSelector() {

    return (

        <div className={styles.rootWrapper_TabSelector}>

            <Tab
                tabName="Feed"
                associatedContent={ContentsForDisplay.FEED}
            />

            <div className={styles.verticalLine} />

            <Tab
                tabName="Projects Financing"
                associatedContent={ContentsForDisplay.PROJECT_FINANCING}
            />
            <div className={styles.verticalLine} />

            <Tab
                className={styles.frankensteinsCastleTab}
                tabName="Frankenstein's Castle"
                associatedContent={ContentsForDisplay.FRANKENSTEINS_CASTLE}
            />
        </div>
    )
}