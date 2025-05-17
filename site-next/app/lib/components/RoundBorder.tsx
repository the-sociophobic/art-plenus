import { FC, ReactNode } from 'react'


export type RoundBorderProps = {
  children: ReactNode
  hide?: boolean
}


const RoundBorder: FC<RoundBorderProps> = ({
  children,
  hide
}) => {
  return (
    <div className='round-border'>
      <div className='round-border__content'>
        {children}
      </div>
      {!hide &&
        <>
          <div className='round-border__round' />
          <div className='round-border__frames' />
        </>
      }
    </div>
  )
}


export default RoundBorder
