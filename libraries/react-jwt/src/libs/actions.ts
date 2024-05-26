import UserModel from '@models/user'
import { compare, genSalt, hash } from 'bcryptjs'

interface LoggedUser {
  username: string
  password: string
}

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

const findByUsername = async (username: string) => (await UserModel.findOne({ username })) as LoggedUser

export { checkPassword, findByUsername, setHashedPassword }
