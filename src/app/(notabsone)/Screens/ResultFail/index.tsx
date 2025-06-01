import { Image, SafeAreaView, StatusBar, View } from "react-native";
import { useExerciseStore } from "@services/exercise.services";
import DoctorFail from "@assets/Images/sad_doctor.png";
import ReportViewOne from "@components/ReportView/ReportViewOne";

export default function ResultFail(){
    const { results } = useExerciseStore();

    return(
        <SafeAreaView className="flex-1 bg-mainColor">
            <StatusBar barStyle={"light-content"}/>
            <View className="flex-1 bg-mainColor justify-center items-center">
                <View className="flex-1 justify-center items-center relative">
                    <Image source={DoctorFail} className="absolute bottom-[-2px]"/>
                </View>
                <View>
                    <ReportViewOne title="Não desanime, você vai conseguir melhorar na próxima!" subtitleOne="Acertos" correct={results.correct} subtitleTwo="Erros" error={results.incorrect}/>
                </View>
            </View>
        </SafeAreaView>
    )
}