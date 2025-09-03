import { ContentsForDisplay } from '../displayed-content/state/displayed-content-store'
import { UserIdentification } from './cpnts/user-identification/UserIdentification'
import { IoHomeOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { RiAlertLine } from "react-icons/ri";
import styles from './Styles.module.scss'
import { IoMdSettings } from "react-icons/io"
import { RiLogoutBoxLine } from "react-icons/ri"
import { IoWalletOutline } from "react-icons/io5";
import { TextButton } from '../../../components/text-button/TextButton';

export function SideBar() {

    return (

        <div className={styles.rootWrapper_SideBar}>

            <UserIdentification />

            <div className={styles.horizontalLine} />

            <TextButton
                associatedContent={ContentsForDisplay.HOME}
                isAllowed={true}
            >

                <IoHomeOutline />

                Home

            </TextButton>

            <TextButton
                associatedContent={ContentsForDisplay.SEARCH}
                isAllowed={false}

            >
<IoSearchOutline />

                Search

            </TextButton>

            <TextButton
                associatedContent={ContentsForDisplay.MESSAGES}
                isAllowed={false}

            >

                <TiMessages />

                Messages

            </TextButton>
            <TextButton
                associatedContent={ContentsForDisplay.ALERTS}
                isAllowed={false}

            >

                <RiAlertLine />

                Alerts

            </TextButton>
            <TextButton
                associatedContent={ContentsForDisplay.WALLET}
                isAllowed={false}

            >

                <IoWalletOutline />

                Wallet

            </TextButton>

            <div className={styles.verticalSeparator} />

            <div className={styles.horizontalLine} />

            <TextButton
                associatedContent={ContentsForDisplay.SETTINGS}
                isAllowed={false}

            >

                <IoMdSettings />

                Settings

            </TextButton>

            <TextButton
                associatedContent={ContentsForDisplay.LOGOUT}
                isAllowed={false}

            >
                <RiLogoutBoxLine />

                Logout

            </TextButton>
        </div>
    )
}