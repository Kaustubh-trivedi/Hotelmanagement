import React from 'react'

const Docs =async ({ params }: {
    params: {
        slug: string[]
    }
}) => {
    const { slug } = await params || [];
    if (slug.length === 2) {
        return <h1>Showing Feature {slug[0]} of concept {slug[1]}</h1>
    } else if (slug.length === 1) {
        return <h2>Showing feature {slug[0]}</h2>
    }
    return <h1>Showing Features</h1>

}

export default Docs