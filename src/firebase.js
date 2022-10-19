// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDjIVU1egu6BizftgK0ayBP8eK5hjyj4hg',
	authDomain: 'netflix-react-8324f.firebaseapp.com',
	projectId: 'netflix-react-8324f',
	storageBucket: 'netflix-react-8324f.appspot.com',
	messagingSenderId: '441325435313',
	appId: '1:441325435313:web:d48e7e7fa04600f49e6590',
}


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)