import { insertButton } from './components/button'
import { postArtistData } from './routes/add-artist'
import { postPaintingData } from './routes/add-painting'


function main() {
  if (window.location.href.includes('socrealizm.com.ua/gallery/painting/')) {
    insertButton(postPaintingData)
  }
  if (window.location.href.includes('socrealizm.com.ua/gallery/artist/')) {
    insertButton(postArtistData)
  }
}

main();
