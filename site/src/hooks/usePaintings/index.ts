import paintings from './paintings.json'
import { PaintingType } from './types'


const usePaintings = () => {
  return (paintings as PaintingType[])
    .map(painting => ({
      ...painting,
      url: painting.url.slice(0, 25)
    }))
}


export default usePaintings
