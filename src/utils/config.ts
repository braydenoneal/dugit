import { homedir } from 'node:os'
import { join } from 'node:path'

export const appName = 'dugit'
export const clientID = 'Iv23lijtn2t2viXRUXCe'

export const configDirectoryPath = join(homedir(), '.config/', appName)
export const configFilePath = join(configDirectoryPath, 'config.json')
