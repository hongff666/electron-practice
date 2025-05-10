import { ipcMain } from 'electron'
import { ping } from './ping'

ipcMain.handle('ping', ping)
