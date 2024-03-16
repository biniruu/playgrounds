export const check = (predicate: () => boolean, onSuccess: (param: 'yes') => void, onFail: (param: 'no') => void) => {
  if (predicate()) {
    onSuccess('yes')
  } else {
    onFail('no')
  }
}
