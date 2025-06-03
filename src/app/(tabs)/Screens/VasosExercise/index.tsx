import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { router } from "expo-router";
import Constants from "expo-constants";
import Button from "@components/Button";
import Title from "@components/Title";
import CardTwo from "@components/ActionCard/CardTwo";

const exercises = [
    {
        id: 1,
        title: "Artérias",
        desc: "As artérias transportam sangue rico em oxigênio do coração para o corpo.",
        imageSource: require("@assets/Icons/medicine_icon.png"),
        path: () => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Artérias"),
    },
    {
        id: 2,
        title: "Veias",
        desc: "As veias levam o sangue de volta ao coração, usando válvulas para impedir o retrocesso.",
        imageSource: require("@assets/Icons/stethoscope_icon.png"),
        path: () => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Veias"),
    },
    {
        id: 3,
        title: "Capilares",
        desc: "Os capilares são vasos micro-cópicos onde ocorre a troca de oxigênio e nutrientes.",
        imageSource: require("@assets/Icons/microscope_icon.png"),
        path: () => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Capilares"),
    },
]

export default function VasosExercise(){
    const statusBarHeight = Constants.statusBarHeight;

    return(
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"transparent"}/>
            <ScrollView style={{ marginTop: statusBarHeight + 8 }} showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4">
                <View className="flex gap-10 pb-4">
                    <View className="flex flex-row h-8">
                        <Button icon="angle-left" iconColor="#282828" iconSize={24} nameClass="flex flex-row" onPress={() => router.back()}/>
                        <Title nameClassOne="flex-1 items-center" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Vaso sanguíneos"/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row items-start" nameClassTextOne="color-blackColor1 text-xl font-medium" textOne="Exercício"/>
                        {exercises.map((exercise) => (
                            <CardTwo key={exercise.id} title={exercise.title} desc={exercise.desc} imageSource={exercise.imageSource} onPress={exercise.path}/>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}