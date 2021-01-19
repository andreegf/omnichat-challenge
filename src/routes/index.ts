import express,{ Router } from 'express'

import usersRouter from './users.routes'

const routes =  Router()
routes.use(express.json())
routes.use('/users',usersRouter)

export default routes