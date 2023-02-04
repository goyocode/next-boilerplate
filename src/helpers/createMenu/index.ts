import navigations from 'src/navigations'
import { MenuTypes } from 'src/shared'

export default function createMenu(key: MenuTypes) {
  return {
    title: key,
    subMenu: Object.entries(navigations)
      .filter((p) => p[1].parent === key)
      .map((p) => {
        const [, subMenu] = p
        const { name, path } = subMenu
        return { name, path }
      }),
  }
}
