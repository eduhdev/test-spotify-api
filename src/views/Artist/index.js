import React from 'react'
import { Link } from 'react-router-dom'

import ArrowLeft from 'assets/images/left-arrow.svg'

import { Layout } from 'components'

import { useArtist } from 'hooks'
import { renderCoverImg } from 'utils'

import * as SB from 'styles/base'
import * as S from './styles'

const Artist = ({ match }) => {
  const {
    params: { id },
  } = match

  const [artist, albums] = useArtist(id)

  const ArtistInfo = () =>
    artist && (
      <>
        <S.ArtistCover src={renderCoverImg(artist.images)} alt={artist.name} />

        <div className="artistInfo">
          <h1>{artist.name}</h1>
          <h5>Popularidade: {artist.popularity}</h5>
          <S.GenreList>
            {artist.genres.map(item => (
              <li key={item}>{item}</li>
            ))}
          </S.GenreList>
        </div>
      </>
    )

  const ArtistAlbum = () => (
    <S.AlbumList>
      {albums.map(({ id, name, images, release_date }) => (
        <li key={id}>
          <img src={renderCoverImg(images)} alt={name} />
          <p>{name}</p>
          <span>{release_date}</span>
        </li>
      ))}
    </S.AlbumList>
  )

  return (
    <Layout>
      <SB.Wrapper>
        <S.Header>
          <Link to="/busca">
            <S.IconBack src={ArrowLeft} alt="link return" />
          </Link>
          <ArtistInfo />
        </S.Header>
        <ArtistAlbum />
      </SB.Wrapper>
    </Layout>
  )
}

export default Artist
