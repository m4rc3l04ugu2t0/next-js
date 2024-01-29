'use client'

import { notFound } from 'next/navigation'

interface ParamsProps {
  params: {
    productID: string
    reviewsID: string
  }
}

const getReandomNumber = (num: number) => {
  return Math.floor(Math.random() * num)
}

export default function ProductIdReview({ params }: ParamsProps) {
  const random = getReandomNumber(2)

  if (random === 0) {
    throw new Error('Error loading product review')
  }
  if (parseInt(params.reviewsID) > 100) {
    notFound()
  }
  return (
    <h1>
      Product id: <strong>{params.productID}</strong>
      <br />
      ProductReviews: <strong>{params.reviewsID}</strong>
    </h1>
  )
}
