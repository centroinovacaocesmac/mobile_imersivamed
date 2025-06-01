import { create } from "zustand";
import { Question } from "@typings/question";

interface Results {
    correct: number;
    incorrect: number;
}

interface AssessmentState {
    title: string;
    questions: Question[];
    selectedOptions: (number | null)[];
    results: Results;
    setAssessment: (title: string, questions: Question[]) => void;
    selectOption: (index: number, option: number) => void;
    setResults: (correct: number, incorrect: number) => void;
    resetAssessment: () => void;
}


export const useAssessmentStore = create<AssessmentState>((set) => ({
    title: "",
    questions: [],
    selectedOptions: [],
    results: { correct: 0, incorrect: 0 },

    setAssessment: (title, questions) =>
        set({
        title,
        questions,
        selectedOptions: new Array(questions.length).fill(null),
        results: { correct: 0, incorrect: 0 },
    }),

    selectOption: (index, optionIndex) =>
        set((state) => {
        const updated = [...state.selectedOptions];
        updated[index] = optionIndex;
        return { selectedOptions: updated };
    }),

    setResults: (correct, incorrect) =>
        set({ results: { correct, incorrect } 
    }),

    resetAssessment: () =>
        set({
        title: "",
        questions: [],
        selectedOptions: [],
        results: { correct: 0, incorrect: 0 },
    }),
}))