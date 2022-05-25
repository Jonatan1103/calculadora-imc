import { Level } from '../../helpers/imc'

type GridItemProps = {
  data: Level
}

const GridItem = ({ data }: GridItemProps ) => {
  return (
    <div>{data.title}</div>
  )
}

export default GridItem