import { create } from "zustand";
import { Question } from "@typings/question";

interface Results {
    correct: number;
    incorrect: number;
}

interface ExerciseState {
    title: string;
    questions: Question[];
    selectedOptions: (number | null)[];
    results: Results;
    setExercise: (title: string, questions: Question[]) => void;
    selectOption: (index: number, option: number) => void;
    setResults: (correct: number, incorrect: number) => void;
    resetExercise: () => void;
}


export const useExerciseStore = create<ExerciseState>((set) => ({
    title: "",
    questions: [],
    selectedOptions: [],
    results: { correct: 0, incorrect: 0 },

    setExercise: (title, questions) =>
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

    resetExercise: () =>
        set({
        title: "",
        questions: [],
        selectedOptions: [],
        results: { correct: 0, incorrect: 0 },
    }),
}))