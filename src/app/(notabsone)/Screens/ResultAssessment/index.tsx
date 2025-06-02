import { Image, SafeAreaView, StatusBar, View } from "react-native";
import { useAssessmentStore } from "@services/assessment.services";
import DoctorReport from "@assets/Images/report_doctor.png";
import ReportViewTwo from "@components/ReportView/ReportViewTwo";

export default function ResultAssessment(){
    const { results } = useAssessmentStore();
    const showSuggestion = results.incorrect > results.correct;

    return(
        <SafeAreaView className="flex-1 bg-mainColor">
            <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={"transparent"}/>
            <View className="flex-1 bg-mainColor justify-center items-center">
                <View className="flex-1 justify-center items-center relative">
                    <Image source={DoctorReport} className="absolute bottom-[-40px]"/>
                </View>
                <View>
                    <ReportViewTwo title="Resumo da avaliação" subtitleOne="Acertos" correct={results.correct} subtitleTwo="Erros" error={results.incorrect} questions={results.correct + results.incorrect} subtitleThree={results.incorrect === 0 ? "Incrível" : showSuggestion ? "Sugestão" : "Parabéns"} suggestion={results.incorrect === 0 ? "Você acertou todas as questões. Continue revisando para manter esse ótimo desempenho." : showSuggestion ? "Algumas questões apresentaram dificuldades. Reforce esse conteúdo." : "Você acertou a maioria das questões. Continue revisando para reforçar ainda mais o conteúdo."}/>
                </View>
            </View>
        </SafeAreaView>
    )
}