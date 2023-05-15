import SecondComponent from './SecondComponent'

function FirstComponent({ name }: { name: string }) {
  return (
    <div>
      <h1 className="mb-4 text-xl">FirstComponent</h1>
      <SecondComponent name={name} />
    </div>
  )
}

export default FirstComponent
