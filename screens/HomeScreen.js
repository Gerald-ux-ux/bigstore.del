import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Bars3Icon } from "react-native-heroicons/solid";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-[#252E3D] pt-5 ">
      <View className="mx-4 mt-4">
        <View className="items-center justify-center flex flex-row  pb-3 mb-3">
          <TouchableOpacity>
            <Bars3Icon size={40} color="#FFFFFF" style={tw`mt-2`} />
          </TouchableOpacity>
          <Text className="text-center  text-white flex-1 pr-10 ">For riders</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
