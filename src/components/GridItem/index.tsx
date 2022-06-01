import { Level } from '../../helpers/imc'
import styles from './GridItem.module.css'
import upImage from '../../assets/images/up.png'
import downImage from '../../assets/images/down.png'

type GridItemProps = {
  data: Level
}

const GridItem = ({ data }: GridItemProps ) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img src={
          data.icon === 'up' 
            ? upImage 
            : downImage
        } 
          alt="up ou down"
        />
      </div>

      <div className={styles.gridTitle}>
        {data.title}
      </div>

      {data.yourImc && 
        <div className={styles.yourImc}>Seu IMC é de {data.yourImc} kg/m²</div>
      }

      <div className={styles.gridInfo}>
        <>
          O IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}

export default GridItem