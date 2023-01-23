import { Item } from './../entities/items';
import { DataSource } from 'typeorm';
import { itemRepository } from './../repositories/itemRepository';
import { Request, Response } from "express";





export class itemController {

    async create(req: Request, res: Response) {
        const { description } = req.body
        var check = description.trim()
        if (!check) return res.status(400).send("Você não pode criar uma tarefa em branco!")
        try {
            const newItem = itemRepository.create({ description: check })
            await itemRepository.save(newItem)
            return res.status(201).json(newItem)
        } catch (err) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }
    }

    async update(req: Request, res: Response) {
        const { id, newDescription } = req.body
        var check = newDescription.trim()
        if (!check) return res.status(400).send("Você não pode salvar uma tarefa em branco!")
        const taskID = await itemRepository.findOneBy({ id })
        if (!taskID) return res.status(400).send("Tarefa não encontrada, tente novamente.")
        try {
            taskID.description = newDescription
            itemRepository.save(taskID)
            return res.json({ message: 'Tarefa atualizada com sucesso!' })
        } catch (err) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.body
        const taskID = await itemRepository.findOneBy({ id })

        try {
            if (!taskID) return res.json({ message: 'Erro inesperado! Confira o ID da sua tarefa e tente novamente!' })
            await itemRepository.delete(id)
            return res.json({ message: 'Tarefa deletada com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }
    }

    async massDelete(req: Request, res: Response) {
        try {
            await itemRepository.clear()          
           return res.json({message: 'Todas as Tarefas foram deletadas com sucesso'})
          } catch (error) {
              return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
          }
  
    }

    async listTasks(req: Request, res: Response) {
        try {
            const list = await itemRepository.find({order: {id: "ASC"}})
            return res.status(200).json({ list })
        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }
    }

}


