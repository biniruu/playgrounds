import { selector } from 'recoil'

import textAtom from './atom'

const textWithPrefix = selector({
  key: 'textWithPrefix',
  get({ get }) {
    return `Let me show you my ${get(textAtom)}`
  },
})

export default textWithPrefix
