import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { router } from "expo-router";
import Constants from "expo-constants";
import Button from "@components/Button";
import Title from "@components/Title";
import CardTwo from "@components/ActionCard/CardTwo";
import HeartIcon from "@assets/Icons/heartbeat_icon.png";
import YogaIcon from "@assets/Icons/yoga_icon.png";
import TreeIcon from "@assets/Icons/tree_icon.png";
import StethoscopeIcon from "@assets/Icons/stethoscope_icon.png";
import MicroscopeIcon from "@assets/Icons/microscope_icon.png";
import MedicineIcon from "@assets/Icons/medicine_icon.png";

export default function ExerciseSystem(){
    const statusBarHeight = Constants.statusBarHeight;

    return(
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"}/>
            <ScrollView style={{ marginTop: statusBarHeight + 8 }} showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4">
                <View className="flex gap-10 pb-4">
                    <View className="flex flex-row h-8">
                        <Button icon="angle-left" iconColor="#282828" iconSize={24} nameClass="flex flex-row" onPress={() => router.back()}/>
                        <Title nameClassOne="flex-1 items-center" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Exercícios"/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Circulação sanguínea"/>
                        <CardTwo title="Coração" desc="Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas." imageSource={HeartIcon} onPress={() => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Coração")}/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Vasos sanguíneos"/>
                        <CardTwo title="Artérias" desc="Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas." imageSource={MedicineIcon} onPress={() => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Artérias")}/>
                        <CardTwo title="Veias" desc="Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas." imageSource={TreeIcon} onPress={() => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Veias")}/>
                        <CardTwo title="Capilares" desc="Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas." imageSource={MicroscopeIcon} onPress={() => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Capilares")}/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Circulação pulmonar"/>
                        <CardTwo title="Pulmão" desc="Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas." imageSource={YogaIcon} onPress={() => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Circulação pulmonar")}/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Circulação sistêmica"/>
                        <CardTwo title="Fluxo" desc="Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas." imageSource={StethoscopeIcon} onPress={() => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Circulação sistêmica")}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}