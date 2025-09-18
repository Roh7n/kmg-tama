import React, { JSX, useState } from "react";
import { Button, Input, Paragraph, Text, XStack, YStack } from "tamagui";
import BackAction from "../../components/BackAction";
import { Keyboard } from "react-native";
import { ArrowRight } from "@tamagui/lucide-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
}

interface StepContent {
  title: string;
  subtitle: string;
  fields: JSX.Element;
}

type FormField = keyof FormData;

export default function StepWizard() {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const totalSteps = 3;
  const progress = currentStep / totalSteps;

  const updateFormData = (field: FormField, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const goToNextStep = () => {
    Keyboard.dismiss();
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    Keyboard.dismiss();
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("form submitted!", formData);
  };

  const getStepContent = (): StepContent | null => {
    switch (currentStep) {
      case 1:
        return {
          title: "It is never too late to fall in love",
          subtitle:
            "Sign up to discover meaningful connections —\nor maybe just a really great date.",
          fields: (
            <>
              <Input
                size="$4"
                borderWidth={2}
                placeholder="First Name"
                value={formData.firstName}
                onChangeText={(text: string) =>
                  updateFormData("firstName", text)
                }
              />
              <Input
                size="$4"
                borderWidth={2}
                placeholder="Last Name"
                value={formData.lastName}
                onChangeText={(text: string) =>
                  updateFormData("lastName", text)
                }
              />
            </>
          ),
        };

      case 2:
        return {
          title: "Let's get your contact details",
          subtitle: "We'll need these to keep you updated about your matches.",
          fields: (
            <>
              <Input
                size="$4"
                borderWidth={2}
                placeholder="Email Address"
                value={formData.email}
                onChangeText={(text: string) => updateFormData("email", text)}
                keyboardType="email-address"
              />
              <Input
                size="$4"
                borderWidth={2}
                placeholder="Phone Number"
                value={formData.phone}
                onChangeText={(text: string) => updateFormData("phone", text)}
                keyboardType="phone-pad"
              />
            </>
          ),
        };

      case 3:
        return {
          title: "Tell us about yourself",
          subtitle: "Help us find your perfect match with some basic info.",
          fields: (
            <>
              <Input
                size="$4"
                borderWidth={2}
                placeholder="Age"
                value={formData.age}
                onChangeText={(text: string) => updateFormData("age", text)}
                keyboardType="numeric"
              />
              <Input
                size="$4"
                borderWidth={2}
                placeholder="Gender"
                value={formData.gender}
                onChangeText={(text: string) => updateFormData("gender", text)}
              />
            </>
          ),
        };

      default:
        return null;
    }
  };

  const stepContent = getStepContent();

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
        <Button disabled>
          <Text>
            {currentStep} of {totalSteps}
          </Text>
        </Button>
      </XStack>

      <YStack flex={1} mt="$2" width="100%" gap="$2">
        <YStack px="$3" width="100%" gap="$1">
          <Text fontSize="$8" fontWeight="800">
            {stepContent?.title}
          </Text>
          <Text fontSize="$4" fontWeight="600">
            {stepContent?.subtitle}
          </Text>
        </YStack>

        <YStack px="$2" mt="$4" gap="$4" width="100%">
          {stepContent?.fields}
        </YStack>
      </YStack>

      <YStack px="$2" mb="$6" gap="$2" width="100%">
        {currentStep < totalSteps ? (
          <Button
            onPress={goToNextStep}
            iconAfter={ArrowRight}
            rounded={30}
            fontWeight="800"
          >
            Continue
          </Button>
        ) : (
          <Button onPress={handleSubmit} rounded={30} fontWeight="800">
            Complete Registration
          </Button>
        )}

        {currentStep > 1 && (
          <Button
            onPress={goToPreviousStep}
            variant="outlined"
            rounded={30}
            fontWeight="800"
          >
            Back
          </Button>
        )}
      </YStack>
    </YStack>
  );
}
