import { Image, SafeAreaView, StatusBar, View } from "react-native";
import { useExerciseStore } from "@services/exercise.services";
import DoctorSuccess from "@assets/Images/happy_doctor.png";
import ReportViewOne from "@components/ReportView/ReportViewOne";

export default function ResultSuccess(){
    const { results } = useExerciseStore();

    return(
        <SafeAreaView className="flex-1 bg-mainColor">
            <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={"transparent"}/>
            <View className="flex-1 bg-mainColor justify-center items-center">
                <View className="flex-1 justify-center items-center relative">
                    <Image source={DoctorSuccess} className="absolute bottom-[-2px]"/>
                </View>
                <View>
                    <ReportViewOne title="Parabéns! Você mandou muito bem e errou quase nada!" subtitleOne="Acertos" correct={results.correct} subtitleTwo="Erros" error={results.incorrect}/>
                </View>
            </View>
        </SafeAreaView>
    )
}