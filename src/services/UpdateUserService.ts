import User from '../models/User'
import UsersRepository from '../repositories/UsersRepository'


class UpdateUserService {
    constructor(
        private usersRepository : UsersRepository
    ){}
    public async execute(user_id: string, name:string): Promise<User> {
        const userExists = await this.usersRepository.findById(user_id)
        console.log("UpdateUserService: validando se usuário existe")
        if(!userExists) {
            throw new Error("User not found");
        }

        console.log("UpdateUserService: Atualizando dados do usuário")
        userExists.name = name
        userExists.updated_at = new Date()

        console.log("UpdateUserService: persistindo usuário atualizado")
        const updatedUser = await this.usersRepository.update(userExists)

        return updatedUser
    }
}

export default UpdateUserService