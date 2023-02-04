import { createNavigations } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Portfolio'

export const portfolioPaths = {
  portfolioMenu1: createNavigations({
    name: 'Portfolio Menu 1',
    path: '/portfolio-menu-1',
    displayOnMenu: true,
    parent,
  }),
  portfolioMenu2: createNavigations({
    name: 'Portfolio Menu 2',
    path: '/portfolio-menu-2',
    displayOnMenu: true,
    parent,
  }),
  portfolioMenu3: createNavigations({
    name: 'Portfolio Menu 3',
    path: '/portfolio-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
