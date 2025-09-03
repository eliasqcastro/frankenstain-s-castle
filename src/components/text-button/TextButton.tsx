import classNames from 'classnames'
import styles from './Styles.module.scss'
import { ContentsForDisplay, useDisplayedContentStore } from '../../root-screen/cpnts/displayed-content/state/displayed-content-store'

interface TextButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    associatedContent: ContentsForDisplay
    isAllowed: boolean
}

export function TextButton({associatedContent, isAllowed: isAllowed, ...rest}: TextButtonProps) {

    const { contentToDisplay, setContentToDisplay } = useDisplayedContentStore()

    const cnmsRootWrapper = classNames(
        rest.className,
        styles.rootWrapper_TextOption,
        { [styles.rootWrapper_SelectedTextOption]: contentToDisplay === associatedContent },
        { [styles.isAllowed]: !isAllowed }
    )

    function handleClick() {

        setContentToDisplay(associatedContent)
    }

    return (

        <div
            {...rest}
            className={cnmsRootWrapper}
            onClick={handleClick}
        >
            {rest.children}
        </div>
    )
}