function SecondComponent({ name }: { name: string }) {
  return (
    <div>
      <h1 className="mb-4 text-xl">SecondComponent</h1>
      <p>{name}</p>
    </div>
  )
}

export default SecondComponent
