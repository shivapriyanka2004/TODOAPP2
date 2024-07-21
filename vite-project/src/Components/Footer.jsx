import styles from "./footer.module.css"
export default function Footer({com,total}){
    return <div className={styles.footer}>
        <span className={styles.item}>
            Completed Todos :{com}
        </span>
        <span className={styles.item}>
            Total Todos :{total}
        </span>
    </div>
}