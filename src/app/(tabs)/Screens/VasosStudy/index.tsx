import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { router } from "expo-router";
import Constants from "expo-constants";
import Button from "@components/Button";
import Title from "@components/Title";
import CardTwo from "@components/ActionCard/CardTwo";

export default function VasosStudy(){
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
                        <Title nameClassOne="flex flex-row items-start" nameClassTextOne="color-blackColor1 text-xl font-medium" textOne="Conteúdo"/>
                        <CardTwo title="Artérias" desc="Explore a artéria em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/ArteriesStudy")}/>
                        <CardTwo title="Veias" desc="Explore a veia em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/VeinsStudy")}/>
                        <CardTwo title="Capilares" desc="Explore os capilares em realidade aumentada (RA) e aprenda sobre suas funções e estruturas." onPress={() => router.push("/(tabs)/Screens/CapillariesStudy")}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}