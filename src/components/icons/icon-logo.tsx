import * as React from 'react'
import Image from 'next/image'
import { SITE_NAME } from '@lib/constants'

interface IconLogoProps {
  size: string,
  [propName: string]: any;
}

const IconLogo = ({ size, ...props }: IconLogoProps ) => {
  return (
    <Image src="/logo.png" alt={SITE_NAME} width={size} height={size} {...props} />
  );
}

export default IconLogo