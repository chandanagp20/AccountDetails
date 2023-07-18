import { getDatabase } from "firebase/database";
import app from "./firebase-service";

const database = getDatabase(app);
export default database;
