import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

export async function subscribeBar(email, barName = null) {
    if (!email) throw new Error("Email is required");

    const cleanEmail = email.trim().toLowerCase();
    const signupsRef = collection(db, "barSignups");

    console.log("[subscribeBar] checking for", cleanEmail);

    const q = query(signupsRef, where("email", "==", cleanEmail));
    const snapshot = await getDocs(q);

    console.log(
        "[subscribeBar] found docs?",
        snapshot.empty ? "no" : "yes",
        snapshot.size
    );

    if (!snapshot.empty) {
        const error = new Error("DUPLICATE_EMAIL");
        error.code = "EMAIL_EXISTS";
        throw error;
    }

    const docRef = await addDoc(signupsRef, {
        email: cleanEmail,
        barName,
        createdAt: serverTimestamp(),
    });

    console.log("[subscribeBar] added doc id:", docRef.id);
    return docRef.id;
}
