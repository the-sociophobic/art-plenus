import { FC, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'


export type RedirectProps = {
  to: string
}


const Redirect: FC<RedirectProps> = ({
  to
}) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to)
  }, [navigate, to])

  return <div>redirect</div>
}


export default Redirect
