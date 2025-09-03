import { StilInDevelopmentScreen } from "../../../components/content-area/still-in-development-screen/StilInDevelopmentScreen";
import { Feed } from "./cpnts/feed/Feed";
import { Home } from "./cpnts/home/Home";
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
                {contentToDisplay === ContentsForDisplay.FEED && <Feed />}
                {contentToDisplay === ContentsForDisplay.FRANKENSTEINS_CASTLE && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.HOME && <Home />}
                {contentToDisplay === ContentsForDisplay.LOGOUT && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.MESSAGES && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.SETTINGS && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.PROJECT_FINANCING && <StilInDevelopmentScreen />}
                {contentToDisplay === ContentsForDisplay.WALLET && <StilInDevelopmentScreen />}
                
            </div>
        </div>
    )
}