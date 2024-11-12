import conf from "../Conf/Conf";
import { Client, Databases, ID, Storage } from "appwrite";

export class Service {
  Client = new Client();
  Databases;

  constructor() {
    this.Client.setEndpoint(conf.appwriteurl).setProject(
      conf.appwriteprojectid
    );
    this.Databases = new Databases(this.Client);
  }

  async Create_details(
    user_Id,
    total_time_spent,
    lessons_completed,
    levels_completed,
    top_speed,
    avg_speed,
    top_accuracy,
    avg_accuracy
  ) {
    try {
      return await this.Databases(
        conf.appwritedatabaseid,
        conf.appwritecollectionidoverall,
        ID.unique(),
        {
          user_Id,
          total_time_spent,
          lessons_completed,
          levels_completed,
          top_speed,
          avg_speed,
          top_accuracy,
          avg_accuracy,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async get_details(
    user_Id,
    total_time_spent,
    lessons_completed,
    levels_completed,
    top_speed,
    avg_speed,
    top_accuracy,
    avg_accuracy
  ) {
    try {
       return await this.Databases.listDocuments(
        conf.appwritedatabaseid,
        conf.appwritecollectionidoverall,
        [
          user_Id,
          total_time_spent,
          lessons_completed,
          levels_completed,
          top_speed,
          avg_speed,
          top_accuracy,
          avg_accuracy,
        ]
      );
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();

export default service;
