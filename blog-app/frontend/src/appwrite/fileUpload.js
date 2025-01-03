import config from "../config/config";
import { Client, ID, Databases, Storage } from "appwrite";

export class FileService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            const resp = await this.storage.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            );
            return resp;
        } catch (error) {
            console.error("FileService :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.error("FileService :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appWriteBucketId,
                fileId
            );
        } catch (error) {
            console.error("FileService :: getFilePreview :: error", error);
            return false;
        }
    }
}

export default new FileService();