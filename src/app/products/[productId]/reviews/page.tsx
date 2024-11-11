import Link from 'next/link'
import React from 'react'

const Reviews = ({ params }: { params: { productId: string } }) => {
    return (
        <>
            <div>Reviews List for Product {params.productId}</div>
            <ul>
                <li><Link href='reviews/1'>Review 1</Link></li>
                <li><Link href='reviews/2'>Review 2</Link></li>
                <li><Link href='reviews/3'>Review 3</Link></li>
                <li><Link href='reviews/4'>Review 4</Link></li>
                <li><Link href='reviews/5'>Review 5</Link></li>
                <li><Link href='reviews/6'>Review 6</Link></li>
            </ul>
        </>
    )
}

export default Reviews