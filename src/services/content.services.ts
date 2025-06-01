import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@lib/firebase";

export interface ContentItem {
    title: string;
    description: string;
}

export async function fetchContentsByTopic(topic: string): Promise<ContentItem[]> {
    try {
        const ref = collection(db, "conteudo");
        const q = query(ref, where("topic", "==", topic));
        const snapshot = await getDocs(q);

        if(!snapshot.empty){
            const docData = snapshot.docs[0].data();
            return docData.contents as ContentItem[];
        }

        return [];

    } catch (error) {
        console.error("Erro ao buscar conteúdos:", error);
        return [];
    }
}