'use server'
import { CharacterEntity } from "@entities/db"
import { AppDataSource } from "../db/data-source"

export const getAll = async () => {
  const source = await AppDataSource.connect()
  const manager = source.manager
  const data = await manager.find(CharacterEntity, { order: { element: 'ASC', id: 'ASC'} })
  await AppDataSource.close()
  return data
}