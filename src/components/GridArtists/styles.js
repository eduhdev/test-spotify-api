import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 3rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    opacity: 0.8;
  }

  li {
    padding: 1rem;
    background: #fff;
    border-radius: 5px;
  }

  img {
    width: auto;
    margin-bottom: 1rem;
    height: 190px;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.7rem;
    font-weight: 200;
  }
`

export const EmptyContent = styled.div`
  font-size: 2rem;
  margin: 6rem auto 0;
  line-height: 1.2;
  text-align: center;
`
