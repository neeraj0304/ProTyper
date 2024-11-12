import conf from "../Conf/Conf";
import { Client, Databases, ID, Storage } from "appwrite";

export class DailyService {
  Client = new Client();
  Databases;

  constructor() {
    this.Client.setEndpoint(conf.appwriteurl)
    .setProject(conf.appwriteprojectid);

    this.Databases = new Databases(this.Client);
  }

  async Create_details_daily(
    specific_date,
    specific_time_spent,
    specific_lessons_completed,
    specific_levels_completed,
    specific_top_speed,
    specific_avg_speed,
    specific_top_accuracy,
    specific_avg_accuracy
  ) {
    try {
      return await this.Databases(
        conf.appwritedatabaseid,
        conf.appwritecollectioniddaily,
        ID.unique(),
        {
          specific_date,
          specific_time_spent,
          specific_lessons_completed,
          specific_levels_completed,
          specific_top_speed,
          specific_avg_speed,
          specific_top_accuracy,
          specific_avg_accuracy
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async get_details_daily(
          specific_date,
          specific_time_spent,
          specific_lessons_completed,
          specific_levels_completed,
          specific_top_speed,
          specific_avg_speed,
          specific_top_accuracy,
          specific_avg_accuracy
  ) {
    try {
       return await this.Databases.listDocuments(
        conf.appwritedatabaseid,
        conf.appwritecollectioniddaily,
        [
          specific_date,
          specific_time_spent,
          specific_lessons_completed,
          specific_levels_completed,
          specific_top_speed,
          specific_avg_speed,
          specific_top_accuracy,
          specific_avg_accuracy
        ]
      );
    } catch (error) {
      throw error;
    }
  }
}

const dailyservice = new DailyService();

export default dailyservice;
