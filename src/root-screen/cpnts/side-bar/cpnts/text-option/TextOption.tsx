import classNames from 'classnames'
import { ContentsForDisplay, useDisplayedContentStore } from '../../../displayed-content/state/displayed-content-store'
import styles from './Styles.module.scss'

interface TabProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    associatedContent: ContentsForDisplay
}

export function TextOption({associatedContent, ...rest}: TabProps) {

    const { contentToDisplay, setContentToDisplay } = useDisplayedContentStore()

    const cnmsRootWrapper = classNames(
        rest.className,
        styles.rootWrapper_TextOption,
        { [styles.rootWrapper_SelectedTextOption]: contentToDisplay === associatedContent }
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