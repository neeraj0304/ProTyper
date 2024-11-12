import conf from "../Conf/Conf";
import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
  Client = new Client();
  Account;
  constructor() {
    this.Client.setEndpoint(conf.appwriteurl).setProject(
      conf.appwriteprojectid
    );
    this.Account = new Account(this.Client);
  }

  //creating a new user
  async CreateAccount({ email, password, name }) {
    try {
      const UserAccount = await this.Account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (UserAccount) {
        return this.login({ email, password }); //called login here
      } else {
        return UserAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // creating a login session
  async login({ email, password }) {
    try {
      return await this.Account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.Account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  // creating a log out session
  async logout() {
    try {
      return await this.Account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }

  async oauth2google() {
    try {
      const UserAccount = this.Account.createOAuth2Session(
        OAuthProvider.Google, // provider
        "http://localhost:5173/", // redirect here on success
        "http://localhost:5173/fail" // redirect here on failure
      );
      
    } catch (error) {
      throw error;
    }
  }

  async oauth2github() {
    try {
      const UserAccount = this.Account.createOAuth2Session(
        OAuthProvider.Github, // provider
        "http://localhost:5173/", // redirect here on success
        "http://localhost:5173/fail" // redirect here on failure
      );
      
    } catch (error) {
      throw error;
    }
  }


}

const authservice = new AuthService();

export default authservice;
