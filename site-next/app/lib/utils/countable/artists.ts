import countable from '.'


const countableArtists = (number: number) =>
  countable(number, ['художник', 'художника', 'художников'])


export default countableArtists
