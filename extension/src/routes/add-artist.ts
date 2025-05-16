import axios from 'axios'

// Утилита для поиска элементов по классам
import { findByClassNames } from '../utils/find'

export const getArtists = async () => {
  const artists = await scrapeArtistsData()
  console.log('Полученные художники:', artists)

  // Здесь можно отправить массив художников на сервер
  // await postArtistsBatch(artists)
}

// Функция для парсинга данных о художниках
const scrapeArtistsData = async (): Promise<{ name: string, link: string }[]> => {
  // Массив для хранения данных о художниках
  const artists: { name: string, link: string }[] = []

  // Получаем все элементы с именами художников
  const artistElements = findByClassNames<HTMLSpanElement>(['title'], ['span'])

  artistElements.forEach(artistElement => {
    const name = artistElement.textContent?.trim() || ''
    if (name) {
      // Формируем ссылку на художника, используя имя
      const artistLink = generateArtistLink(name)
      artists.push({ name, link: artistLink })
    }
  })

  return artists
}

// Функция для генерации ссылки на художника
const generateArtistLink = (name: string): string => {
  // Формируем часть ссылки из имени художника (заменяем пробелы на дефисы и приводим к нижнему регистру)
  const artistSlug = name.toLowerCase().replace(/\s+/g, '-')
  return `https://socrealizm.com.ua/gallery/artist/${artistSlug}`
}

// Отправка данных на сервер
export const postArtistsBatch = async (artists: any[]) => {
  const res = await axios.post('http://localhost:5015/add-artists', { artists })
  console.log('Отправлено художников:', artists.length)
  console.log('Ответ сервера:', res.data)
}