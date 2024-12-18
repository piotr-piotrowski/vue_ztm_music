import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW39a2I7ks21g-Wa3LZqwSQFGV4qtBERk",
  authDomain: "music-31d82.firebaseapp.com",
  projectId: "music-31d82",
  storageBucket: "music-31d82.appspot.com",
  messagingSenderId: "885006000348",
  appId: "1:885006000348:web:c51312790fb8dbb0079419",
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch(error =>
  console.log(`Firebase persistence error ${error.code}`),
)

const userCollection = db.collection("users")
const songCollection = db.collection("songs")
const commentsCollection = db.collection("comments")

export { auth, db, storage, userCollection, songCollection, commentsCollection }
