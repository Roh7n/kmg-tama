import { ChevronLeft } from "@tamagui/lucide-icons";
import { Button } from "tamagui";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();

  return <Button icon={ChevronLeft} onPress={() => router.back()} />;
}
