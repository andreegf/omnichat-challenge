import User from '../models/User'
import UsersRepository from '../repositories/UsersRepository'
import ICreateUserDTO from '../DTOs/ICreateUserDTO'

class CreateUserService {
    constructor(
        private usersRepository : UsersRepository
    ){}
    public async execute({name,email} : ICreateUserDTO): Promise<User> {
        const userExists = await this.usersRepository.findByEmail(email)
        console.log("CreateUserService: validando se usuário existe")
        if(userExists) {
            throw new Error("User already exists");
        }

        const user = await this.usersRepository.create({
            name,
            email
        })
        console.log("CreateUserService: Criando usuário")
        return user
    }
}

export default CreateUserService