import { selector } from 'recoil'

import textAtom from './text'

const textWithPrefix = selector({
  key: 'textWithPrefix',
  get({ get }) {
    return `Let me show you my ${get(textAtom)}`
  },
})

export default textWithPrefix
