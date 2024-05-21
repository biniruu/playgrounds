interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface SwapiPeople {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

interface SwapiPeopleData {
  count: number
  next: string
  previous: null
  results: SwapiPeople[]
}

export { Comment, Post, SwapiPeople, SwapiPeopleData }
