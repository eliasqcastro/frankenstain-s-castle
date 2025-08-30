import styles from './Styles.module.scss'

export function OptionButton(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

    return (

        <div
            {...props}
            className={styles.rootWrapper_OptionButton}
        >
            {props.children}
        </div>
    )
}