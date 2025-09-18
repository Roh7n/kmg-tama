import { Link, router, useLocalSearchParams } from "expo-router";
import { Button, Label, XStack, YStack } from "tamagui";
import BackAction from "../../components/BackAction";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowRight } from "@tamagui/lucide-icons";
import { Keyboard } from "react-native";
import { useState } from "react";
import { PasswordInput } from "components/PasswordInput";

export default function password() {
  const insets = useSafeAreaInsets();
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpMode, SetIsOtpMode] = useState(false);
  const { flow } = useLocalSearchParams();

  const toggleMode = () => {
    SetIsOtpMode(!isOtpMode);
    setPassword("");
    setOtp("");
  };

  const handleContinue = () => {
    Keyboard.dismiss();
    if (flow === "signup") {
      router.push("/(auth)/stepWizard");
    }
  };
  return (
    <YStack
      flex={1}
      justify="space-between"
      bg="$background"
      px="$4"
      pt={insets.top}
      pb={insets.bottom}
    >
      <XStack justify="space-between" px="$2" mb="$4" width="100%">
        <BackAction />
      </XStack>

      <YStack mt="$4" gap="$2" width="100%">
        <Label htmlFor="name" fontSize={30} letterSpacing={1}>
          Enter your password
        </Label>

        <YStack items={"center"} gap="$2">
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />

          <Button width="auto" background={"ButtonFace"} onPress={toggleMode}>
            {isOtpMode ? " Sign in with password" : "Sign in with OTP"}
          </Button>
        </YStack>
      </YStack>

      <YStack px="$2" mb="$6" gap="$2" width="100%">
        <Button onPress={handleContinue} iconAfter={ArrowRight} rounded={30}>
          Continue
        </Button>
      </YStack>
    </YStack>
  );
}
