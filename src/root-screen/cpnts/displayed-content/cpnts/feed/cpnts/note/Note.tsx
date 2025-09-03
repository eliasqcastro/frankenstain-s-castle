import type { Note } from "../../../../../../../types/Note"
import { FaReply } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";


import styles from './Styles.module.scss'

interface NoteProps {

    note: Note
}

export function NoteWrapper({ note }: NoteProps) {

    return (

        <div className={styles.rootWrapper_Note}>

            <div className={styles.projectIdWrapper}>
                
                <img src={note.profileImagePath} alt="Content image." />
                <p>
                    {note.profileName}
                </p>
            </div>
            <div className={styles.contentWrapper}>
                <p>
                    {note.contentText}
                </p>
                <img src={note.contentImagePath} alt="Content image." />
            </div>

            <div className={styles.optionButtonsWrapper}>

                <FaReply className={styles.optionButton} />
                <BsLightning className={styles.optionButton}/>
                <IoRocketOutline className={styles.optionButton} />
            </div>
        </div>
    )
}