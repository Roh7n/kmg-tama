import { Link, router } from "expo-router";
import {
  Button,
  H3,
  Image,
  Input,
  Label,
  Paragraph,
  Text,
  XStack,
  YStack,
} from "tamagui";
import BackAction from "../../components/BackAction";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowRight } from "@tamagui/lucide-icons";
import { Keyboard } from "react-native";

export default function signUp() {
  const insets = useSafeAreaInsets();
  const handleContinue = () => {
    Keyboard.dismiss();
    router.push({
      pathname: "/(auth)/password",
      params: { flow: "signup" },
    });
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
          What's your phone number?
        </Label>

        <Input
          size="$4"
          borderWidth={2}
          placeholder="Phone number"
          keyboardType="numeric"
          width="100%"
        />
      </YStack>

      <YStack px="$2" mb="$6" gap="$2" width="100%">
        <YStack justify="center" items="center">
          <Text letterSpacing={1}>
            By tapping Continue, you are agreeing to{"\n"}our{" "}
            <Text fontWeight="900">Terms of Service</Text> and{" "}
            <Text fontWeight="900">Privacy Policy</Text>
          </Text>
        </YStack>

        <Button
          onPress={handleContinue}
          iconAfter={ArrowRight}
          rounded={30}
          fontWeight="800"
        >
          Continue
        </Button>
      </YStack>
    </YStack>
  );
}
