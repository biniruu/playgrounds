import useWindowSize from 'utils/custom-hooks/useWindowSize'

function WindowSize() {
  const { windowSize, currentDevice } = useWindowSize()

  return (
    <div>
      <h1 className="mb-4 text-xl">WindowSize</h1>
      <p>width: {windowSize.width}</p>
      <p>current device: {currentDevice}</p>
    </div>
  )
}

export default WindowSize
