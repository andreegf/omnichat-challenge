import { response, Router } from 'express'
import UsersRepository from '../repositories/UsersRepository'
import ListUserService from '../services/ListUserService'
import CreateUserService from '../services/CreateUserService'
import UpdateUserService from '../services/UpdateUserService'
import DeleteUserService from '../services/DeleteUserService'

const usersRouter = Router()
const usersRepository = new UsersRepository()
const createUserService = new CreateUserService(usersRepository)
const listUserService = new ListUserService(usersRepository)
const updateUserService = new UpdateUserService(usersRepository)
const deleteUserService = new DeleteUserService(usersRepository)

usersRouter.post('/', async (req,res) => {
    try {
        const { name, email, password } = req.body
        const createdUser = await createUserService.execute({name,email})
        return res.json(createdUser)

    } catch(err){
        return response.status(400).json({error : err.message})
    }
})

usersRouter.get('/', async (req,res) => {
    try {
        const list = await listUserService.execute()
        return res.json(list)
    } catch(err){
        return response.status(400).json({error : err.message})
    }
})

usersRouter.patch('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body
        const updatedUser = await updateUserService.execute(id, name)
        return res.json(updatedUser)

    } catch(err){
        return response.status(400).json({error : err.message})
    }
})

usersRouter.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const newUserList = await deleteUserService.execute(id)
        return res.json(newUserList)

    } catch(err){
        return response.status(400).json({error : err.message})
    }
})


export default usersRouter