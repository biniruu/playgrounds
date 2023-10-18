import { selector } from 'recoil'

import textAtom from './text'

const textWithSuffix = selector({
  key: 'textWithSuffix',
  get({ get }) {
    return `${get(textAtom)} is my text.`
  },
})

export default textWithSuffix
