import React, { useState } from "react";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { Button, Input, XStack } from "tamagui";

export const PasswordInput = ({ placeholder = "Enter password", ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <XStack
      borderWidth={1}
      borderColor="$borderColor"
      rounded={10}
      background="$background"
      justify={"center"}
      items={"center"}
    >
      <Input
        flex={1}
        placeholder={placeholder}
        secureTextEntry={!isPasswordVisible}
        borderWidth={0}
        borderTopRightRadius={"$0"}
        borderBottomRightRadius={"$0"}
        {...props}
      />
      <Button size="$2" chromeless onPress={togglePasswordVisibility}>
        {isPasswordVisible ? <EyeOff size="$1" /> : <Eye size="$1" />}
      </Button>
    </XStack>
  );
};
