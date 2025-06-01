import { useState } from "react";
import { View, Text, Modal, StatusBar } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import Button from "@components/Button";
import InputFiel from "@components/InputField";

interface BottomSheetProps {
    title?: string;
    desc?: string;
    activeIndex?: number;
    onPress?(): void;
    nameButton?: string;
}

export default function BottomSheet({title, desc, activeIndex, onPress, nameButton}: BottomSheetProps){
  const [modalVisible, setModalVisible] = useState(false);
  const [useName, setUsename] = useState("");

  function handleButtonPress(){
    if(activeIndex === 2){
      setModalVisible(true);
    } else {
      onPress?.();
    }
  }

  async function handleStart(){
    if(!useName.trim()){
      return;
    }

    try {
      await AsyncStorage.setItem("@user_name", useName);
      setModalVisible(false);
      router.replace("/(tabs)/Home")
    } catch (error) {
      console.error("Erro ao salvar nome", error);
    }
  }

  return (
    <View className="bg-white rounded-t-[20px] w-screen h-72 px-4 py-6 gap-6 items-center">
      <Text className="color-blackColor2 text-2xl font-medium text-center">{title}</Text>
      <Text className="color-grayColor2 text-lg text-center">{desc}</Text>
      <View className="flex flex-row items-center gap-2">
        {[0, 1, 2].map((index) => (
            <View key={index} className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-mainColor" : "bg-grayColor4"}`}/>
        ))}
      </View>
      <Button nameClass="bg-mainColor w-full flex flex-row justify-center rounded-[10px] p-4" nameClassText="color-white text-xl" name={nameButton} iconClass="hidden" onPress={handleButtonPress}/>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View className="bg-black/50 flex-1 justify-center items-center">
          <View className="bg-white flex gap-2 w-10/12a w-[320px] rounded-2xl shadow-lg p-6">
            <Text className="color-blackColor2 text-xl font-bold mb-4 text-start">A imersão está prestes a começar! Como devemos te chamar?</Text>
            <InputFiel icon="user-large" placeholderName="Digite seu primeiro nome" value={useName} onChangeText={setUsename}/>
            <Button nameClass="bg-mainColor flex flex-row justify-center rounded-[10px] p-4" nameClassText="color-white text-xl" name="Começar imersão" iconClass="hidden" onPress={handleStart}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}