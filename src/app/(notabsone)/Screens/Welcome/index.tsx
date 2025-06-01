import { Image, SafeAreaView, StatusBar, View } from "react-native";
import { useState } from "react";
import DoctorWelcome from "@assets/Images/welcome_doctor.png";
import BottomSheet from "@components/BottomSheet";

export default function Welcome(){
    const [paginaAtual, setPaginaAtual] = useState(0);
    
    function proximaPagina(){
        setPaginaAtual(prev => prev + 1);
    }
    
    return(
        <SafeAreaView className="flex-1 bg-mainColor">
            <StatusBar barStyle={"light-content"}/>
            <View className="flex-1 bg-mainColor justify-center items-center">
                <View className="flex-1 justify-center items-center relative">
                    <Image source={DoctorWelcome}/>
                </View>
                <View>
                    <BottomSheet title={paginaAtual === 0 ? "Bem-vindo ao ImersivaMed": paginaAtual === 1 ? "Interaja com Modelos 3D": "Teste seus conhecimentos"} desc={paginaAtual === 0 ? "Descubra como o sistema circulatório funciona com conteúdos e modelos 3D.": paginaAtual === 1 ? "Veja imagens se transformando em modelos 3D do sistema circulatório.": "Responda aos teste e faça exercícios para praticar o que aprendeu."} activeIndex={paginaAtual} nameButton={paginaAtual === 2 ? "Iniciar imersão" : "Próximo"} onPress={proximaPagina}/>
                </View>
            </View>
        </SafeAreaView>
    )
}