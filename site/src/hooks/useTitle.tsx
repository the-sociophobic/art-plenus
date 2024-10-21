import React from 'react'


const useTitle = ( title?: string ) => {
  const res = 'art-plenus: ' + (title || '')

  React.useEffect(() => {
    document.title = res
  }, [res])

  return res
}


export default useTitle
