import { useState } from 'react'

import styles from './App.module.css'
import poweredImg from './assets/images/powered.png'
import leftArrowImg from './assets/images/leftarrow.png'

import { levels, calculateImc, Level } from './helpers/imc'
import GridItem from './components/GridItem'
 

const App = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [showInfoImc, setShowInfoImc] = useState<Level | null>(null)

  const handleCalculateImc = () => {
    if (height && weight) {
      setShowInfoImc(calculateImc(height, weight))
    } else {
      alert("Digite todos os campos")
    }
  }

  const handleBackButton = () => {
    setShowInfoImc(null)
    setHeight(0)
    setWeight(0)
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
            disabled={showInfoImc ? true : false}
          />

          <input 
            type="number"
            placeholder="Digite seu peso ex: 76.5 (em kg)"    
            value={weight > 0 ? weight : ''}
            onChange={ e => setWeight(e.target.valueAsNumber)}
            disabled={showInfoImc ? true : false}
          />

          <button 
            disabled={showInfoImc ? true : false} 
            onClick={handleCalculateImc}
          >
            Calcular
          </button>

        </div>

        <div className={styles.rightSide}>
          {!showInfoImc && 
            <div className={styles.grid}>
              {levels.map((item, index) => (
                <GridItem key={index} data={item}/>
              ))}
            </div>          
          }

          {showInfoImc &&
            <div className={styles.rightBig}>
              <div 
                className={styles.rightArrow}
                onClick={handleBackButton}
              >
                <img src={leftArrowImg} 
                  alt="seta para a esquerda" 
                />
              </div>
              <GridItem data={showInfoImc}/>
            </div>
          }

        </div>

      </div>
    </div>
  )
}

export default App