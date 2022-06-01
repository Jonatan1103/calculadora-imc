export type Level = {
  title:string
  color: string
  icon: 'down' | 'up'
  imc: number[]
  yourImc?: number
}

export const levels: Level[] = [
  { title:'Baixo Peso', color: '#96a3ab', icon: 'down', imc: [0, 18.59]},
  { title:'Normal', color: '#0FAC69', icon: 'up', imc: [18.6, 24.99]},
  { title:'Sobrepeso', color: '#e2b039', icon: 'down', imc: [25, 30]},
  { title:'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99]},
]


export const calculateImc = (height: number, weight: number) => {
  const imc =  Math.round((weight /  height ** 2) * 10) / 10
  
  for(let i in levels) {
    if( imc >= levels[i].imc[0] && imc < levels[i].imc[1] ) {
      const levelsCopy = {...levels[i]}
      levelsCopy.yourImc = imc 
      return levelsCopy
    }
  }

  return null
}