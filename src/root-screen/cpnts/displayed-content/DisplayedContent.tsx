import { StilInDevelopmentScreen } from "../../../components/content-area/still-in-development-screen/StilInDevelopmentScreen";
import { TabSelector } from "./cpnts/tab-selector/TabSelector";
import { ContentsForDisplay, useDisplayedContentStore } from "./state/displayed-content-store";

import styles from './Styles.module.scss'

export function DisplayedContent() {

    const { contentToDisplay } = useDisplayedContentStore()

    return (

        <div className={styles.rootWrapper_DisplayedContent}>

            <TabSelector />

            <div className={styles.contentArea}>

                {contentToDisplay === ContentsForDisplay.ALERTS && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.FEED && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.FRANKENSTEINS_CASTLE && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.HOME && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.LOGOUT && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.MESSAGES && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.SETTINGS && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.PROJECT_FINANCING && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.WALLET && <StilInDevelopmentScreen />}
                
            </div>
        </div>
    )
}