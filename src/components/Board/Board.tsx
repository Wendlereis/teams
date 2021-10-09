import { Props } from './types'

import * as S from './styles'

function Board({ title, children }: Props): JSX.Element {
  return (
    <S.Board>
      {title && <S.Title variant="h5">{title}</S.Title>}
      <S.Content>{children}</S.Content>
    </S.Board>
  )
}

export default Board
