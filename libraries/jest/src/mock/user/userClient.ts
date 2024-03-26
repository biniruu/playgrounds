class UserClient {
  login(id: string, password: string): Promise<'success' | 'fail'> {
    return fetch(`http://example.com/login/${id}+${password}`).then(response => response.json())
  }
}

export { UserClient }
