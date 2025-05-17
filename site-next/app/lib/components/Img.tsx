'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'


type ImgProps = {
  src?: string | StaticImageData
  style?: object
  className?: string
  alt?: string
  crop?: boolean
  urlParams?: string
  onClick?: () => void
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
}


const Img: FC<ImgProps> = (props) => {
  const [portrait, setPortrait] = useState<boolean | undefined>(undefined)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const setOrientation = () =>
    setPortrait(
      (containerRef?.current?.offsetWidth || 1) / (containerRef?.current?.offsetHeight || 1) >
      (imgRef?.current?.width || 1) / (imgRef?.current?.height || 1)
    )

  useEffect(() => {
    if (imgRef?.current) {
      setOrientation()
    }
  })

  const src = `${props.src || ''}${props.urlParams || ''}`

  return src.length === 0 ? <></> : (
    <div
      ref={containerRef}
      className={`
        Img
        ${props.className}
        ${typeof portrait === "undefined" && "Img--hidden"}
      `}
      style={props.style}
      onClick={props.onClick}
    >
      {/* <Image */}
      <img
        ref={imgRef}
        alt={props.alt || 'image'}
        src={!src.includes('http') ? src.replace('//', 'https://') : src}
        className={`
          Img__img
          Img__img--${props.crop && (portrait ? "portrait" : "landscape")}
        `}
        onLoad={setOrientation}
        // width={props.width}
        // height={props.height}
      />
    </div>
  )
}


export default Img
