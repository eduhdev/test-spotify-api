import { useState, useEffect } from 'react'

import { SomosClient } from 'utils'

export default text => {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getArtists = async () => {
    const client = new SomosClient()

    try {
      setLoading(true)
      const { data } = await client.getArtistBySearch(text)
      setArtists(data.artists.items)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (text && text.length >= 4) {
      getArtists()
    }
  }, [text])

  return [artists, loading, error]
}
