import styles from './Styles.module.scss'

export function ContentArea(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

    return (

        <div
            {...props}
            className={styles.rootWrapper_ContentArea}
        >
            {props.children}
        </div>
    )
}