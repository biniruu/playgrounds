class UserClient {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(id: string, password: string) {
    return new Promise(res => res(true))
  }
}

export { UserClient }
