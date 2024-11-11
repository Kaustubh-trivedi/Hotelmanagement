import React from 'react'

const productDetail = ({ params }: {
    params: { productId: string }
}) => {
    return (
        <div>productDetail for the data {params.productId}</div>
    )
}

export default productDetail