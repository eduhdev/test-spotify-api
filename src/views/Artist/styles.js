import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.div`
  display: flex;

  ${media.lessThan('small')`
    flex-wrap: wrap;
  `}

  .artistInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4rem;

    h1 {
      font-size: 4rem;
      line-height: 1.4;
    }

    h5 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    ${media.lessThan('medium')`
      margin-left: 2rem;

      h1 {
        font-size: 2rem;
      }

      h5 {
        font-size: 1rem;
      }
    `}

    ${media.lessThan('small')`
      margin-left: 0;
      margin-top: 1rem;
    `}
  }
`

export const GenreList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;

  li {
    margin-right: 1rem;
    background-color: var(--color-purple);
    color: #fff;
    padding: 0.5rem;
    font-weight: 600;
    border-radius: 5px;
    margin-bottom: 0.5rem;

    ${media.lessThan('medium')`
      margin-right: 0.5rem;
      font-size: 0.8rem;
      padding: 0.4rem;
    `}
  }

  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 200;
  }
`

export const AlbumList = styled.ul`
  margin-top: 3rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1rem;

  li {
    padding: 1rem;
    background: #fff;
    border-radius: 5px;
  }

  img {
    width: auto;
    margin-bottom: 1rem;
    height: 220px;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 200;
  }
`

export const IconBack = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 45%;
  align-self: flex-start;
  margin-right: 2rem;

  ${media.lessThan('medium')`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  `}
`

export const ArtistCover = styled.img`
  height: 250px;

  ${media.lessThan('medium')`
    width: 30vw;
    height: 30vw;
  `}

  ${media.lessThan('small')`
    margin-left: auto;
    width: 50vw;
    height: 50vw;
  `}
`
