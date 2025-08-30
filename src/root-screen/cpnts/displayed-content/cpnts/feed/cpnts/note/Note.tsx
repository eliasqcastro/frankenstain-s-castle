import type { Note } from "../../../../../../../types/Note"

interface NoteProps {

    note: Note
}

export function NoteWrapper({ note }: NoteProps) {

    return (

        <div>
            <div>
                <p>
                    {note.contentText}
                </p>
                <img src={note.profileImagePath} alt="Content image." />
            </div>
        </div>
    )
}