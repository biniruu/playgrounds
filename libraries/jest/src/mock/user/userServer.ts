interface UserClient {
  login: (id: string, password: string) => Promise<unknown>
}

class UserServer<T extends UserClient> {
  isLoggedIn = false

  constructor(private userClient: T) {
    this.userClient = userClient
  }

  async login(id: string, password: string) {
    if (!this.isLoggedIn) {
      try {
        await this.userClient.login(id, password)
        this.isLoggedIn = true
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export { UserServer }
