import Game from '../../models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  titulo: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, titulo, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{titulo}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
