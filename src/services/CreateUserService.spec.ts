import UsersRepository from '../repositories/UsersRepository'
import CreateUserService from './CreateUserService'

let usersRepository = new UsersRepository()
let createUserService = new CreateUserService(usersRepository)


describe('CreateUserTest', () => {
    it('should be able to create a user', async () => {
        const user = await createUserService.execute({
            name: "Pedro",
            email: "pedro1@legal.com.br"
        })
        expect(user).toHaveProperty("id")
    })
    it("should not be able to create a user with duplicated email", async () => {
        await createUserService.execute({
            name: "Pedro",
            email: "pedro@legal.com.br"
        })
        await expect(createUserService.execute({
            name: "marcelo",
            email: "pedro@legal.com.br"
        })).rejects.toBeInstanceOf(Error)
    })
})