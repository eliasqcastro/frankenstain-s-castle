import classNames from "classnames"
import { useDisplayedContentStore, type ContentsForDisplay } from "../../../state/displayed-content-store"

import styles from './Styles.module.scss'

interface TabProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    associatedContent: ContentsForDisplay
    tabName: string
}

export function Tab({ associatedContent, tabName, ...rest }: TabProps) {

    const { contentToDisplay, setContentToDisplay } = useDisplayedContentStore()

    const cnmsRootWrapper = classNames(
        rest.className,
        styles.rootWrapper_Tab,
        { [styles.rootWrapper_SelectedTab]: contentToDisplay === associatedContent }
    )

    function handleTabClick() {

        setContentToDisplay(associatedContent)
    }

    return (

        <div
            {...rest}
            className={cnmsRootWrapper}
            onClick={handleTabClick}
        >
            {tabName}
            {rest.children}
        </div>
    )
}