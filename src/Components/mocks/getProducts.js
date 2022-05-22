import { collection, getDocs, getFirestore, where, query} from 'firebase/firestore'

export function getProducts (category) {
    const db= getFirestore()

    const itemCollection = collection(db, 'items')

    const q = category && query (
        itemCollection,
        where('category', '==', category)
    );

    return getDocs(q || itemCollection)
}