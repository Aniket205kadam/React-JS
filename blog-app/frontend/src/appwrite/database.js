import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabasesService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.storage);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                ID.unique,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.error("DatabasesService :: createPost :: error", error);
        }
    }

    async updatePost(id, {title, slug, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                id,
                {
                    title, 
                    slug, 
                    content, 
                    featuredImage, 
                    status
                }
            );
        } catch (error) {
            console.error("DatabasesService :: updatePost :: error", error);
        }
    }

    async deletePost(id) {
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                id
            );
            return true;
        } catch (error) {
            console.error("DatabasesService :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(id) {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                id
            );
        } catch (error) {
            console.error("DatabasesService :: getPost :: error", error);
            return null;
        }
    }

    async getAllActivePost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries
            );
        } catch (error) {
            console.error("DatabasesService: getAllPost: error", error);
            return false;
        }
    }
}

export default new DatabasesService();
