import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader, Layout } from 'components'

import * as S from 'styles/base'

const Home = () => (
  <Layout>
    <SubHeader
      breadcrumb={[{ text: 'Home' }]}
      heading="Somos Front-end Challange"
    />
    <S.Wrapper>
      <Link to="/busca">
        <S.Button>Search Artists</S.Button>
      </Link>
    </S.Wrapper>
  </Layout>
)

export default Home
