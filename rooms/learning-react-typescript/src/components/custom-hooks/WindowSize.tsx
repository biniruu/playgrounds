import useWindowSize from 'utils/custom-hooks/useWindowSize'

function WindowSize() {
  const { width, height } = useWindowSize()

  return (
    <div>
      <h1 className="mb-4 text-xl">WindowSize</h1>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  )
}

export default WindowSize
