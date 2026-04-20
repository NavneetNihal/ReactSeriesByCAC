import conf from '../conf/conf.js';
import {
    Client,
    Account,
    ID
} from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({
        email,
        password,
        name
    }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (!userAccount) return;

            // If account is created successfully, automatically log the user in.
            return this.login({ email, password });
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            throw error; // Re-throw the error to be handled by the UI
        }
    }

    async login({
        email,
        password,
    }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error; // Re-throw the error to be handled by the UI
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // Log the error for debugging, but return null so the app doesn't crash.
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true; // Indicate success
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
            return false; // Indicate failure
        }
    }
}

const authService = new AuthService();

export default authService