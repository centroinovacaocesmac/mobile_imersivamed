import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { router } from "expo-router";
import Constants from "expo-constants";
import Button from "@components/Button";
import Title from "@components/Title";
import CardTwo from "@components/ActionCard/CardTwo";

export default function ContentsSystem(){
    const statusBarHeight = Constants.statusBarHeight;

    return(
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"transparent"}/>
            <ScrollView style={{ marginTop: statusBarHeight + 8 }} showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4">
                <View className="flex gap-10 pb-4">
                    <View className="flex flex-row h-8">
                        <Button icon="angle-left" iconColor="#282828" iconSize={24} nameClass="flex flex-row" onPress={() => router.back()}/>
                        <Title nameClassOne="flex-1 items-center" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Conteúdos"/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Circulação sanguínea"/>
                        <CardTwo title="Coração" desc="Explore o coração em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/HeartStudy")}/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Vasos sanguíneos"/>
                        <CardTwo title="Artérias" desc="Explore a artéria em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/ArteriesStudy")}/>
                        <CardTwo title="Veias" desc="Explore a veia em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/VeinsStudy")}/>                 
                        <CardTwo title="Capilares" desc="Explore os capilares em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/CapillariesStudy")}/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Circulação pulmonar"/>
                        <CardTwo title="Pulmão" desc="Explore o pulmão em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/LungStudy")}/>
                    </View>
                    <View className="gap-4">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Circulação sistêmica"/>
                        <CardTwo title="Fluxo" desc="Explore o fluxo em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/FluxoStudy")}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}