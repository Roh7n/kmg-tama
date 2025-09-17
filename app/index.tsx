import { Link } from "expo-router";
import { Button, H3, Image, Paragraph, XStack, YStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <YStack flex={1} justify="center" items="center" gap="$5" bg="$background">
      <YStack width={192} height={320} rounded={30} bg="$accent1" />
      <XStack gap="$3">
        <Image
          source={require("../assets/images/logo.png")}
          width={50}
          height={50}
          borderRadius={12}
        />
        <H3 fontWeight="900">Mirash</H3>
      </XStack>
      <Paragraph size="$8" fontWeight="700" text="center" letterSpacing={1}>
        It is never too late to{"\n"}fall in love
      </Paragraph>
      <YStack justify="center" items="center" gap="$2" width="100%">
        <Link href="/stepWizard" asChild>
          <Button size="$5" width="60%" rounded={30} fontWeight="800">
            Create an account
          </Button>
        </Link>

        <Button
          size="$5"
          width="60%"
          rounded={30}
          fontWeight="800"
          variant="outlined"
        >
          Sign in
        </Button>
      </YStack>
    </YStack>
  );
}
