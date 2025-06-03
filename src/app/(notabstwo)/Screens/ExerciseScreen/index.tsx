import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { fetchQuestionsByTopic } from "@services/exerciseFirebase.services";
import { useExerciseStore } from "@services/exercise.services";
import { router, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import Constants from "expo-constants";
import Button from "@components/Button";
import Title from "@components/Title";
import CheckListItem from "@components/CheckListItem";

export default function ExerciseScreen(){
        const statusBarHeight = Constants.statusBarHeight;
    const { topic } = useLocalSearchParams();
    const { title, questions, selectedOptions, selectOption, setExercise} = useExerciseStore();
    
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            if(typeof topic === "string"){
                const questionsData = await fetchQuestionsByTopic(topic);

                const mappedQuestions = questionsData.map((q, index) => ({
                    id: index,
                    question: q.question,
                    options: q.options,
                    correct: q.correct,
                }))

                setExercise(topic, mappedQuestions);
            }
            setLoading(false);
        }

        load();
    }, [topic]);

    const handleNext = () => {
        if(current + 1 < questions.length){
            setCurrent(current + 1);
        }else{
            const correctAnswers = questions.filter(
                (q, index) => selectedOptions[index] === q.correct
            ).length;

            const incorrectAnswers = questions.length - correctAnswers;
            useExerciseStore.getState().setResults(correctAnswers, incorrectAnswers);

            if(correctAnswers >= incorrectAnswers){
                router.push("/(notabsone)/Screens/ResultSuccess");
            }else{
                router.push("/(notabsone)/Screens/ResultFail");
            }
        }
    };

    const handlePrevious = () => {
        if(current > 0){
            setCurrent(current - 1);
        }
    };
    
    const currentQuestion = questions[current];
    const selected = selectedOptions[current];

    if(loading){
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#000" />
            </SafeAreaView>
        );
    }

    if (!questions.length) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
                <Text className="text-xl font-bold text-center">
                    Nenhuma pergunta encontrada para o tópico "{topic}".
                </Text>
                <Button name="Voltar" onPress={() => router.back()} nameClass="bg-mainColor mt-4 px-4 py-3 rounded-[10px]" nameClassText="color-white text-lg text-center" iconClass="hidden"/>
            </SafeAreaView>
        );
    }

    return(
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"transparent"}/>
            <ScrollView style={{ marginTop: statusBarHeight + 8 }} showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4">
                <View className="flex gap-10 pb-4">
                    <View className="flex flex-row h-8">
                        <Button icon="angle-left" iconColor="#E0E0E0" iconSize={24} nameClass="flex flex-arow" onPress={() => {}} disabled/>
                        <Title nameClassOne="flex-1 items-center" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne={title}/>
                    </View>
                    <View className="gap-4">
                        <Text className="color-mainColor text-lg font-normal">
                            Pergunta {current + 1} de {questions.length}
                        </Text>
                        <Text className="color-blackColor2 text-2xl font-semibold">
                            {currentQuestion.question}
                        </Text>
                    </View>
                    <View className="gap-4">
                        {currentQuestion.options.map((option, index) => (
                            <CheckListItem key={index} label={option} isSelected={selected === index} onPress={() => selectOption(current, index)}/>                            
                        ))}
                    </View>
                    <View className="flex flex-row gap-4 w-full">
                        {current > 0 && (
                            <Button
                                name="Voltar"
                                nameClass="bg-mainColor rounded-[10px] flex-1 py-4"
                                nameClassText="color-white text-xl text-center"
                                iconClass="hidden"
                                onPress={handlePrevious}
                            />
                        )}
                        <Button 
                            name={current + 1 < questions.length ? "Próximo" : "Finalizar"}
                            nameClass={`${
                                selected === null ? "bg-grayColor4" : "bg-mainColor"
                            }  rounded-[10px] flex-1 py-4`}
                            nameClassText="color-white text-xl text-center"
                            iconClass="hidden"
                            onPress={handleNext}
                            disabled={selected === null}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}