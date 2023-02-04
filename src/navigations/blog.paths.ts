import { createNavigations } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Blog'

export const blogPaths = {
  blogMenu1: createNavigations({
    name: 'Blog Menu 1',
    path: '/blog-menu-1',
    displayOnMenu: true,
    parent,
  }),
  subBlogMenu1: createNavigations({
    name: 'Blog Menu 1',
    path: '/blog-menu-1',
    displayOnMenu: true,
    parent: 'blogMenu1',
  }),
  blogMenu2: createNavigations({
    name: 'Blog Menu 2',
    path: '/blog-menu-2',
    displayOnMenu: true,
    parent,
  }),

  blogMenu3: createNavigations({
    name: 'Blog Menu 3',
    path: '/blog-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
