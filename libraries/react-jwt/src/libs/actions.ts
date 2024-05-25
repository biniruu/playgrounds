import { compare, genSalt, hash } from 'bcryptjs'

const setHashedPassword = async (password: string) => {
  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)

  return hashedPassword
}

const checkPassword = async (password: string) => {
  const hashedPassword = await setHashedPassword(password)
  const result = await compare(password, hashedPassword)

  return result
}

export { checkPassword, setHashedPassword }
