import { itemController } from './src/controllers/itemController';
import { Router } from "express"

const express = require('express')
const routes = Router()

routes.post('/newTask', new itemController().create)
routes.put('/updateTask', new itemController().update)
routes.delete('/deleteTask', new itemController().delete)
routes.delete('/massDelete', new itemController().massDelete)
routes.get('/list', new itemController().listTasks)

export default routes