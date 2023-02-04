import { createNavigations } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Demos'

export const demosPaths = {
  demosMenu1: createNavigations({
    name: 'Demos Menu 1',
    path: '/demos-menu-1',
    displayOnMenu: true,
    parent,
  }),
  demosMenu2: createNavigations({
    name: 'Demos Menu 2',
    path: '/demos-menu-2',
    displayOnMenu: true,
    parent,
  }),
  demosMenu3: createNavigations({
    name: 'Demos Menu 3',
    path: '/demos-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
