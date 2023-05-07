import {
  Application,
  json,
  urlencoded,
  static as staticFiles,
  request,
} from 'express'
import { join } from 'path'

const path = join(__dirname, '..', 'public')

export function initialMiddlewares(app: Application) {
  app.use(json())
  app.use(urlencoded({ extended: false }))
  app.use(staticFiles(path))
}

export default initialMiddlewares
