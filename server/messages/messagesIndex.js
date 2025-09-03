import { Router } from 'express'
import messagesCreate from './messagesCreate.js'

const messagesRouter = Router()

messagesRouter.post('/', messagesCreate)

export default messagesRouter