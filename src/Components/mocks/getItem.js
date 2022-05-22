import { doc, getDoc, getFirestore} from 'firebase/firestore'

export function getItem (id) {

    const db= getFirestore()

    const itemRef = doc(db, 'items', id)

    return getDoc(itemRef)
}