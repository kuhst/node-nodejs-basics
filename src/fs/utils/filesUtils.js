import { access } from 'node:fs/promises';

export const checkFileExist = async (filePath) => {
    try {
        await access(filePath)
        return true
    } catch (err) {
        return false
    }
}
