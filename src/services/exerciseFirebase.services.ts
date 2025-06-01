import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@lib/firebase";
import { Question, FirebaseQuestion } from "@typings/question";

export async function fetchQuestionsByTopic(topic: string): Promise<Question[]> {
    try {
        const ref = collection(db, "exercicio");
        const q = query(ref, where("topic", "==", topic));
        const snapshot = await getDocs(q);

        if(!snapshot.empty){
            const data = snapshot.docs[0].data();
            const rawQuestions = data.questions as FirebaseQuestion[];

            const mappedQuestions: Question[] = rawQuestions.map((q, index) => ({
                id: index,
                question: q.question,
                options: q.options,
                correct: q.correctAnswer,
            }));

            return mappedQuestions;
        }

        return [];

    } catch (error) {
        console.error("Erro ao buscar questões:", error);
        return [];
    }
}