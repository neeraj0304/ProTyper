const conf={
    appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseid:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionidoverall:String(import.meta.env.VITE_COLLECTION_ID_OVERALL),
    appwritecollectioniddaily:String(import.meta.env.VITE_COLLECTION_ID_DAILY),
    
}


export default conf