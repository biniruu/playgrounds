interface UserClient {
  login: (id: string, password: string) => Promise<'success' | 'fail'>
}

class UserServer {
  isLoggedIn = false

  constructor(private userClient: UserClient) {
    this.userClient = userClient
  }

  async login(id: string, password: string) {
    if (this.isLoggedIn) {
      return
    }

    try {
      const result = await this.userClient.login(id, password)
      if (result === 'success') {
        this.isLoggedIn = true
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export { UserServer }
