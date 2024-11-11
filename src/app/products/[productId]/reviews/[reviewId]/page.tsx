import React from 'react'

const ReviwDetail = ({ params }: {
    params: {
        productId:string,
        reviewId:string,
    }
}) => {
    return (
        <div>ReviwDetail {params.reviewId} for product {params.productId} </div>
    )
}

export default ReviwDetail