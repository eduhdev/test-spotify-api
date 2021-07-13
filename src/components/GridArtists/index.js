import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { renderCoverImg } from 'utils'

import * as S from './styles'

const GridArtistas = ({ data }) =>
  !!data.length ? (
    <S.Wrapper>
      {data.map(({ id, images, name }) => (
        <Link to={`/artista/${id}`} key={id} data-testid="artist-id">
          <li>
            <img src={renderCoverImg(images)} alt={name} />
            <p>{name}</p>
          </li>
        </Link>
      ))}
    </S.Wrapper>
  ) : (
    <S.EmptyContent>Nenhum resultado encontrado! :(</S.EmptyContent>
  )

GridArtistas.defaultProps = {
  data: [],
}

GridArtistas.propTypes = {
  data: PropTypes.array,
}

export default GridArtistas
