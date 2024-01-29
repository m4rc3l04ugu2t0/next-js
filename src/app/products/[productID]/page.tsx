import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ParamsProps {
  params: {
    productID: string
    reviewsID: string
  }
}

export const generateMetadata = async ({
  params
}: ParamsProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone reviwes ${params.reviewsID}`)
    }, 100)
  })

  return {
    title: `Title ${title}`
  }
}
export default function ProductsDetails({
  params
}: {
  params: { productID: string }
}) {
  if (parseInt(params.productID) > 100) {
    notFound()
  }
  return (
    <>
      <h1>{params.productID}</h1>
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem
        dolorum veniam repudiandae, sed cumque ab accusantium sit hic itaque
        recusandae corporis corrupti quas sunt quasi dignissimos labore modi?
        Qui.
      </p>
    </>
  )
}
