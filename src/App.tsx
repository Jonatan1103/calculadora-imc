import styles from './App.module.css'
import poweredImg from './assets/images/powered.png'

const App = () => {
  return (
    <div className={styles.main}>

      <header className={styles.headerContainer}>
        <div>
          <img src={poweredImg} alt="logo" />
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.leftSide}>
          ...
        </div>
        <div className={styles.rightSide}>
          ...
        </div>

      </div>
    </div>
  )
}

export default App