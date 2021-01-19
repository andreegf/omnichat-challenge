import User from '../models/User'
import UsersRepository from '../repositories/UsersRepository'

class ListUserService {
    constructor(
        private usersRepository : UsersRepository
    ){}
    public async execute(): Promise<User[]> {
        console.log("ListUserService: Listando Usuários")
        const user = await this.usersRepository.list()
        return user
    }
}

export default ListUserService