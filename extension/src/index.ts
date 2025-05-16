// ОСТАНОВИЛСЯ ТУТ https://socrealizm.com.ua/gallery/artist/artistenburg-ii-1841

import { insertButton } from './components/button'
// import { postArtistData } from './routes/add-artist'
// import { postPaintingData } from './routes/add-painting'
import { traversePages } from './routes/traverse-pages'


function main() {
  // if (window.location.href.includes('socrealizm.com.ua/gallery/painting/')) {
  //   insertButton(postPaintingData)
  // }
  // if (window.location.href.includes('socrealizm.com.ua/gallery/artist/')) {
  //   insertButton(postArtistData)
  // }
  if (window.location.href.includes('socrealizm.com.ua/gallery')) {
    // insertButton(traversePages)
    traversePages()
  }
}

main();
