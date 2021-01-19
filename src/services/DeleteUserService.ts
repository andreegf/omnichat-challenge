import User from '../models/User'
import UsersRepository from '../repositories/UsersRepository'

class DeleteUserService {
    constructor(
        private usersRepository : UsersRepository
    ){}
    public async execute(id:string): Promise<User[]> {
        const userExists = await this.usersRepository.findById(id)
        console.log("DeleteUserService: validando se usuário existe")
        if(!userExists) {
            throw new Error("User not found");
        }

        console.log("DeleteUserService: deletando usuário")
        const users = await this.usersRepository.delete(id)

        return users
    }
}

export default DeleteUserService