import { ChangeEvent, useState } from 'react'

export function useInput(initialState: string) {
  const [inputValue, setInputValue] = useState(initialState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  return [inputValue, handleInputChange] as const
}
