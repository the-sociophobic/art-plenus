import React from 'react'


const useTitle = ( title?: string ) => {
  const res = 'pont-des-arts: ' + (title || '')

  React.useEffect(() => {
    document.title = res
  }, [res])

  return res
}


export default useTitle
