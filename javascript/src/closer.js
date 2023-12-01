/* eslint-disable no-inner-declarations, prefer-const, no-console */

{
  let scope = 'global scope'

  function checkscope() {
    let scope = 'local scope'

    function f() {
      return scope
    }

    return f()
  }

  console.log(checkscope()) // local scope
}

{
  let scope = 'global scope'

  function checkscope() {
    let scope = 'local scope'

    function f() {
      return scope
    }

    return f
  }

  let s = checkscope()()
  console.log(s) // local scope
}

{
  let scope = 'global scope'

  function checkscope() {
    let scope = 'local scope'

    function f() {
      return scope
    }

    return f
  }

  const s = {
    scope: 'object scope',
    func() {
      return checkscope()()
    },
  }
  console.log(s.func()) // local scope
}
