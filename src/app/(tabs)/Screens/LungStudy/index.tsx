import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { fetchContentsByTopic, ContentItem } from "@services/content.services";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import Button from "@components/Button";
import Title from "@components/Title";
import Accordion from "@components/Accordion";
import PulmonaryImage from "@assets/Images/pulmonary_image.png";
import LoadingText from "@components/LoadingText";
import InfoTooltip from "@components/InfoTooltip";

export default function CapillariesStudy(){
    const statusBarHeight = Constants.statusBarHeight;
    const [contents, setContents] = useState<ContentItem[]>([]);

    useEffect(() => {
        const loadContents = async () => {
            const data = await fetchContentsByTopic("Circulação pulmonar");
            setContents(data);
        };
        loadContents();
    }, []);

    return(
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"transparent"}/>
            <ScrollView style={{ marginTop: statusBarHeight + 8 }} showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4">
                <View className="flex gap-10 pb-4">
                    <View className="flex flex-row h-8">
                        <Button icon="angle-left" iconColor="#282828" iconSize={24} iconClass="flex flex-row" onPress={() => router.back()}/>
                        <Title nameClassOne="flex-1 items-center" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Circulação pulmonar"/>
                    </View>
                    <View className="gap-2">
                        <TouchableOpacity className="border-[0.4px] border-mainColorVariant2 rounded-[10px] h-52 flex justify-center items-center" onPress={() => router.push({pathname: "/(notabstwo)/Screens/View3DModel", params: {id: "pulmao"}})}>
                            <Image source={PulmonaryImage} className="w-40 h-40"/>
                        </TouchableOpacity>
                        <View className="flex flex-row justify-between">
                            <Text className="color-grayColor2 text-base font-medium">Veja o modelo 3D tocando na imagem</Text>
                            <InfoTooltip title="Olá! Antes de visualizar o modelo 3D, aqui vão duas dicas importantes:" messageOne="1: O carregamento do modelo pode levar alguns segundos. Não se preocupe, é normal." messageTwo="2: Atualmente, é possível visualizar o modelo até duas vezes. Para acessá-lo novamente após isso, será necessário fechar e reabrir o aplicativo."/>
                        </View>
                    </View>
                    <View className="gap-4">
                        {contents.length > 0 ? (
                            contents.map((item, index) => (
                                <Accordion key={index} title={item.title} desc={item.description}/>
                            ))
                        ) : (
                            <LoadingText/>
                        )}
                    </View>
                    <View>
                        <Button name="Avaliar aprendizado" nameClass="bg-mainColor flex flex-row justify-center rounded-[10px] p-4" nameClassText="color-white text-xl" iconClass="hidden" onPress={() => router.push("/(notabstwo)/Screens/AssessmentScreen?topic=Circulação pulmonar")}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}