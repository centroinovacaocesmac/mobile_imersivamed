import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants  from "expo-constants";
import HandWavingIcon from "@assets/Icons/hand_icone.png";
import Title from "@components/Title";
import FilterInput from "@components/Filter";
import CardOne from "@components/ActionCard/CardOne";
import CardTwo from "@components/ActionCard/CardTwo";

const exercises = [
    {
        id: 1,
        title: "Coração",
        desc: "Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas.",
        imageSource: require("@assets/Icons/heartbeat_icon.png"),
        path: () => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Coração"),
    },
    {
        id: 2,
        title: "Vasos sanguíneos",
        desc: "Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas.",
        imageSource: require("@assets/Icons/tree_icon.png"),
        path: () => router.push("/(tabs)/Screens/VasosExercise"),
    },
    {
        id: 3,
        title: "Circulação pulmonar",
        desc: "Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas.",
        imageSource: require("@assets/Icons/yoga_icon.png"),
        path: () => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Circulação pulmonar"),
    },
    {
        id: 4,
        title: "Circulação sistêmica",
        desc: "Exercício que consta 5 questões de múltipla escolha, cada uma com 4 alternativas.",
        imageSource: require("@assets/Icons/stethoscope_icon.png"),
        path: () => router.push("/(notabstwo)/Screens/ExerciseScreen?topic=Circulação sistêmica"),
    },
]

export default function Home(){
    const statusBarHeight = Constants.statusBarHeight;
    const [search, setSearch] = useState("");
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        async function loadUserName(){
            try {
                const name = await AsyncStorage.getItem("@user_name");
                if(name){
                    setUserName(name);
                }
            } catch (error) {
                console.error("Erro ao carregar nome do usuário:", error);
            }
        }
        loadUserName();
    }, []);

    const normalize = (text: string) => (
        text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
    )

    const filteredExercises = exercises.filter((item) =>
        normalize(item.title).includes(normalize(search))
    )

    return(
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"transparent"}/>
            <ScrollView style={{ marginTop: statusBarHeight + 8 }} showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4">
                <View className="flex gap-10 pb-4">
                    <View className="flex-1">
                        <Title nameClassTextOne="color-blackColor1 text-2xl font-normal" textOne="Olá," textTwo={userName || "Visitante"} nameClassTwo="flex flex-row items-center gap-2" nameClassTextTwo="color-mainColorVariant1 text-4xl font-bold" nameClassImage="w-6 h-6" imageSource={HandWavingIcon}/>
                    </View>
                    <View>
                        <FilterInput value={search} onChangeText={setSearch}/>
                    </View>
                    <View className="gap-6">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Sistema circulatório"/>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View className="flex flex-row gap-2">
                                <CardOne icon="hand-holding-heart" iconSize={32} name="Coração" onPress={() => router.push("/(tabs)/Screens/HeartStudy")}/>
                                <CardOne icon="person" iconSize={32} name="Vasos" onPress={() => router.push("/(tabs)/Screens/VasosStudy")}/>
                                <CardOne icon="lungs" iconSize={24} name="Pulmão" onPress={() => router.push("/(tabs)/Screens/LungStudy")}/>
                                <CardOne icon="heart-pulse" iconSize={32} name="Fluxo" onPress={() => router.push("/(tabs)/Screens/FluxoStudy")}/>
                            </View>
                        </ScrollView>
                    </View>
                    <View className="gap-6">
                        <Title nameClassOne="flex flex-row" nameClassTextOne="color-blackColor1 text-2xl font-medium" textOne="Exercícios"/>
                        <View className="gap-4">
                            {filteredExercises.length > 0 ? (
                                filteredExercises.map((exercises) => (
                                    <CardTwo key={exercises.id} title={exercises.title} desc={exercises.desc} imageSource={exercises.imageSource} onPress={exercises.path}/>
                                ))
                            ) : (
                                <Text className="text-center text-grayColor3">Nenhum exercício encontrado.</Text>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}