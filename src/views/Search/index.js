import React, { useState } from 'react'
import { useGetArtists } from 'hooks'

import { Layout, Input, Loading, GridArtists } from 'components'

import * as S from 'styles/base'

const Busca = () => {
  const [inputValue, setInputValue] = useState('')
  const [artists, loading] = useGetArtists(inputValue)

  return (
    <Layout>
      <S.Wrapper>
        <Input
          placeholder="Search"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        {loading ? <Loading /> : <GridArtists data={artists} />}
      </S.Wrapper>
    </Layout>
  )
}

export default Busca
