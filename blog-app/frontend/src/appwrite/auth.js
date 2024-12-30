import config from '../config/config';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    clinet = new Client();
    account;

    constructor() {
        this.clinet
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.account = new Account(this.clinet);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password, name);

            if (userAccount) {
                // after create account user can automatically login
                return this.login({email, password});
            } else {
                return userAccount;
            }
        }
        catch (error) {
            console.error("AuthService :: createAccount :: error", error);
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession()
        } catch (error) {
            console.error("AuthService :: login :: error", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("AuthService :: logout :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService;