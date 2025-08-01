import React from 'react'
import Image from 'next/image'
import LogoDark from 'public/images/udr-logo.svg'
import LogoLight from 'public/images/udr-logo-white.svg'

const AdminLogo = () => {
  return (
    <div>
      <Image
        src={LogoDark}
        alt="Urban Data Response Logo"
        width={193}
        height={34}
        className="h-[32px] object-contain dark:hidden"
      />
      <Image
        src={LogoLight}
        alt="Urban Data Response Logo"
        width={193}
        height={34}
        className="h-[32px] object-contain hidden dark:block"
      />
    </div>
  )
}

export default AdminLogo
