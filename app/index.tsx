import { Link } from "expo-router";
import { Button, H3, H4, Image, Paragraph, XStack, YStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <YStack flex={1} justify="center" items="center" gap="$5" bg="$background">
      <YStack width={192} height={320} rounded={30} bg="$black5" />
      <XStack gap="$3" items="center">
        <Image
          source={require("../assets/images/logo.png")}
          width={50}
          height={50}
          borderRadius={12}
        />
        <H3 fontWeight="900">Mirash</H3>
      </XStack>

      <YStack items="center" gap="$1">
        <Paragraph size="$6" fontWeight="400" letterSpacing={0.5}>
          It is never too late to
        </Paragraph>
        <H4 fontWeight="800" letterSpacing={1}>
          fall in love
        </H4>
      </YStack>

      <YStack justify="center" items="center" gap="$2" width="100%">
        <Link href="/signup" asChild>
          <Button
            size="$5"
            width="70%"
            rounded={25}
            fontWeight="800"
            pressStyle={{ scale: 0.98 }}
          >
            Create an account
          </Button>
        </Link>

        <Link href="/signin" asChild>
          <Button
            size="$5"
            width="70%"
            rounded={25}
            fontWeight="800"
            variant="outlined"
            pressStyle={{ scale: 0.98 }}
          >
            Sign in
          </Button>
        </Link>
      </YStack>
    </YStack>
  );
}
