import navigations from 'src/navigations'

export default function getNavigation(key: keyof typeof navigations) {
  return navigations[key].path
}
