import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no nme is provided', () => {
    const sut = new SignUpController()
    const HttpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpReponse = sut.handle(HttpRequest)
    expect(httpReponse.statusCode).toBe(400)
    expect(httpReponse.body).toEqual(new Error('Missing param: name'))
  })
})
