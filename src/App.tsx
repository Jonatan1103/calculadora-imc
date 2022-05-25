import { useState } from 'react'
import styles from './App.module.css'
import poweredImg from './assets/images/powered.png'

import { levels, calculateImc } from './helpers/imc'

const App = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const handleCalculateImc = () => {
    if (height && weight) {
      calculateImc(height, weight)
    } else {
      alert("Digite todos os campos")
    }
  }

  return (
    <div className={styles.main}>

      <header className={styles.headerContainer}>
        <div>
          <img src={poweredImg} alt="logo" />
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
            type="number"
            placeholder="Digite a sua altura ex: 1.5 (em métros)"    
            value={height > 0 ? height : ''}
            onChange={ e => setHeight(e.target.valueAsNumber)}
          />

          <input 
            type="number"
            placeholder="Digite seu peso ex: 76.5 (em kg)"    
            value={weight > 0 ? weight : ''}
            onChange={ e => setWeight(e.target.valueAsNumber)}
          />

          <button onClick={handleCalculateImc}>Calcular</button>

        </div>

        <div className={styles.rightSide}>
          <div className={styles.grid}>
          {levels.map((item, index) => (
            <div key={index}> {item.title} </div>
          ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App