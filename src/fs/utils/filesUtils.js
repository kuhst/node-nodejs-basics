import { access, readdir } from 'node:fs/promises';

export const checkFileExist = async (filePath) => {
    try {
        await access(filePath)
        return true
    } catch (err) {
        return false
    }
}

export const checkDirExist = async (filePath) => {
    try {
        await readdir(filePath)
        return true
    } catch (err) {
        return false
    }
}
