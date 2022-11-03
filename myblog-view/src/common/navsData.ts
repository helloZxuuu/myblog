export type Nav = {
  name: string,
  link: string
}

export type Navs = Nav[]

export const navs: Navs = [
  {
    name: 'home',
    link: '/'
  },
  {
    name: 'blogs',
    link: '/posts'
  }
]