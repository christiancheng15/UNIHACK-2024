import { CSSProperties } from 'react'
import styles from './LoadingSpinner.module.css'

interface ILoadingSpinner {
    width?: string | number | null,
    sx?: CSSProperties | null
}

const LoadingSpinner = ({ width, sx }: ILoadingSpinner) => {

    return (
        <div style={sx ?? undefined} className={`item ${styles["loading-6"]} transition-all flex items-center justify-center m-auto`}>
            <svg viewBox="25 25 50 50" style={{ width: `${width ? width : "4rem"}` }}>
                <circle className={styles.circle_spinner} cx="50" cy="50" r="20"></circle>
            </svg>
        </div>
    )
}

export default LoadingSpinner