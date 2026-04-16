import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Choose a state manager</h1>
      <p className={styles.subtitle}>
        Same Todo app, different implementation. Pick one.
      </p>

      <div className={styles.links}>
        <div className={styles.card}>
          <div>
            <div>
              <Link to="/mobx">MobX</Link>
            </div>
            <div className={styles.hint}>observable store + computed values</div>
          </div>
          <div className={styles.hint}>/mobx</div>
        </div>

        <div className={styles.card}>
          <div>
            <div>
              <Link to="/zustand">Zustand</Link>
            </div>
            <div className={styles.hint}>store hook + selectors</div>
          </div>
          <div className={styles.hint}>/zustand</div>
        </div>
      </div>
    </div>
  )
}

