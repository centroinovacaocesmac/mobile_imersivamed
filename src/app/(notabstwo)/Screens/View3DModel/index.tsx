import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Modelo, useModeloService } from "@services/model.services";
import Constants  from "expo-constants";
import Model3D from "@components/Model3D";
import Button from "@components/Button";
import LoadingText from "@components/LoadingText";

export default function View3DModel(){
    const statusBarHeight = Constants.statusBarHeight;
    const {id} = useLocalSearchParams();
    const modeloServices = useModeloService();
    const [modelo, setModelo] = useState<Modelo | null>(null);

    useEffect(() => {
        const configInicial = () => {
            const encontrado = modeloServices.getModelo(id as string);
            if(encontrado) setModelo(encontrado);
        }
        configInicial();
    }, [id]);

    if(!modelo) return <LoadingText/>

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>
            <View style={{marginTop: statusBarHeight + 8}} className="bg-white px-4">
                <View className="flex flex-col gap-4">
                    <Model3D modelo={modelo}/>
                    <Button name="Voltar" nameClass="bg-mainColor flex flex-row justify-center rounded-[10px] p-4" nameClassText="color-white text-xl" onPress={() => router.back()}/>
                </View>
            </View>
        </SafeAreaView>
    )
}