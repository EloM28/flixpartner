import Image from 'next/image'
import React from 'react'

function ImageComp({ src, w, h, a }) {
    return (
        <>
            <Image src={`http://localhost:3001/Thumbnails/${src}`}
                width={w} height={h}
                className="object-cover h-full w-full" alt={a}
                priority={true} placeholder='blur'
                unoptimized
                onError={(e) => {
                    e.target.onerror = null; // Remove the onerror attribute to avoid infinite loop
                    e.target.src = `http://localhost:3001/img/thumb.jpg`; // Set the src to the default image
                }}
                fallback={<Image width={w} height={h} src="http://localhost:3001/img/thumb.jpg" alt="Default Image" />}
                blurDataURL="data:image/png;base64,...(base64-encoded image data)" />
        </>
    )
}

export default ImageComp