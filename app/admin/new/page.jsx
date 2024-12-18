import React from 'react'
import Image from 'next/image'
function page() {
  return (
       <Image
        src="https://png.pngtree.com/png-vector/20211029/ourmid/pngtree-world-or-earth-vector-illustration-png-image_4014812.png"
        alt="Beautiful Earth"
        width={10}
        height={10}
        layout="responsive" // Optional, ensures responsiveness
        priority // Optional: Preloads the image
      />
    
  )
}

export default page
