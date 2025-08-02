import React from 'react'
import Image from 'next/image'
import Icon from 'public/favicon.svg'

const AdminIcon = () => {
  return (
    <Image
      src={Icon}
      alt="Urban Data Response Icon"
      width={193}
      height={34}
      loading="lazy"
      fetchPriority="low"
      decoding="async"
      className="h-5 object-contain"
    />
  )
}

export default AdminIcon
