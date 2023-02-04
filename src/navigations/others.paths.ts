import { createNavigations } from 'src/helpers'

export const othersPaths = {
  home: createNavigations({
    name: 'Home',
    path: '/',
  }),
  notfound: createNavigations({
    name: '404 Not Found',
    path: '/not-found-404',
  }),
}
