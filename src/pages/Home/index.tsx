import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetSoonQuery, useGetOnSaleQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }

  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }

  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: OnSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (OnSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={OnSaleGames} title="Promoçoes" background="gray" />
        <ProductsList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
