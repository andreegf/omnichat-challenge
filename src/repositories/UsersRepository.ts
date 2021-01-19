import { uuid } from 'uuidv4'
import User from '../models/User'

import ICreateUserDTO from '../DTOs/ICreateUserDTO'

class UsersRepository {
    private users: User[] = []


    public async create(userData : ICreateUserDTO):Promise<User> {
        const user = new User();

        Object.assign(user,{id: uuid()}, userData)

        this.users.push(user)

        return user
    }

    public async list():Promise<User[]>{
        return this.users
    }

    public async findById(id: string):Promise<User|void> {
        const foundUser =  await this.users.find(user => user.id === id)
        return foundUser
    }

    public async findByEmail(email : string):Promise<User|void> {
        const foundUser =  await this.users.find(user => user.email === email)
        return foundUser
    }

    public async update(user: User): Promise<User> {
        const foundUser = await this.users.findIndex(searchUser => searchUser.id === user.id )
        this.users[foundUser] = user
        return user
    }

    public async delete(id: string):Promise<User[]> {
        const foundUser = await this.users.findIndex(searchUser => searchUser.id === id )
        this.users.splice(foundUser,1)
        return this.users
        
    }

}

export default UsersRepository