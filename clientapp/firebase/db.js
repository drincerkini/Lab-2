import { firebaseApp } from "./index";
import {getFireStore, connectFirestoreEmulator} from "firebase/firestore";

const db=getFireStore(firebaseApp);
connectFirestoreEmulator(db,"http://127.0.0.1:8082")


export default db;