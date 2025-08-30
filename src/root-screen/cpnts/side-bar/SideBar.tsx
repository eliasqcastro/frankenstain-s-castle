import { ContentsForDisplay } from '../displayed-content/state/displayed-content-store'
import { TextOption } from './cpnts/text-option/TextOption'
import { UserIdentification } from './cpnts/user-identification/UserIdentification'
import { IoHomeOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

import { RiAlertLine } from "react-icons/ri";
import styles from './Styles.module.scss'
import { IoMdSettings } from "react-icons/io"
import { RiLogoutBoxLine } from "react-icons/ri"
import { IoWalletOutline } from "react-icons/io5";




export function SideBar() {

    return (

        <div className={styles.rootWrapper_SideBar}>

            <UserIdentification />

            <div className={styles.horizontalLine} />

            <TextOption associatedContent={ContentsForDisplay.HOME}>

                <IoHomeOutline />

                Home

            </TextOption>

            <TextOption associatedContent={ContentsForDisplay.MESSAGES}>

                <TiMessages />

                Messages

            </TextOption>
            <TextOption associatedContent={ContentsForDisplay.ALERTS}>

                <RiAlertLine />

                Alerts

            </TextOption>
            <TextOption associatedContent={ContentsForDisplay.WALLET}>

                <IoWalletOutline />

                Wallet

            </TextOption>

            <div className={styles.verticalSeparator} />

            <div className={styles.horizontalLine} />

            <TextOption associatedContent={ContentsForDisplay.SETTINGS}>

                <IoMdSettings />

                Settings

            </TextOption>

            <TextOption associatedContent={ContentsForDisplay.LOGOUT}>

                <RiLogoutBoxLine />

                Logout

            </TextOption>
        </div>
    )
}