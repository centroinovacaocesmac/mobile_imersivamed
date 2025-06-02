import { StatusBar, View } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";

const FORCE_WELCOME_FOR_TEST = false;

export default function Index(){
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const navigateAfterDelay = async () => {
      try {
        const hasVisited = await AsyncStorage.getItem("hasVisited");

        setTimeout(async () => {
          if (FORCE_WELCOME_FOR_TEST) {
            router.replace("/(notabsone)/Screens/Welcome");
          } else if (hasVisited) {
            router.replace("/(tabs)/Home");
          } else {
            await AsyncStorage.setItem("hasVisited", "true");
            router.replace("/(notabsone)/Screens/Welcome");
          }
          setShowAnimation(false);
        }, 10000);
      } catch (error) {
        console.error("Erro ao verificar visita:", error);
        router.replace("/(tabs)/Home");
      }
    };

    navigateAfterDelay();
  }, []);

  return(
    <View className="flex-1 bg-white">
      <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={"transparent"}/>
      <View className="flex-1">
        {showAnimation && (
          <LottieView
            source={require("@assets/SplashScreen/imersivamed.json")}
            autoPlay
            loop={false}
            style={{ flex: 1, width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        )}
      </View>
    </View>
  )
}