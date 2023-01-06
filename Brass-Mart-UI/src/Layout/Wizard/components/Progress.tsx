import { ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, HStack, Text, Box } from "@chakra-ui/react";
import { useWizardContext } from "./WizardContext";

export interface ProgressProps {
  stepItems: string[];
};

export const useWizardProgress = () => {
  const { currentStep, steps } = useWizardContext();
  return {
    currentStep,
    steps,
  };
};

export default function Progress({ stepItems }: ProgressProps) {
  const { currentStep, steps } = useWizardProgress();
  return (
    <Flex
      marginTop={6}
      p={6}
      w="80%"
      maxW="42rem"
      alignItems="center"
      justifyContent="space-between"
    >

      {stepItems?.map((item: string, index: number) => (
        index < stepItems.length-1 ?
          <HStack key={index}>
            <Text
              color={index >= currentStep ? "gray.600" : "green.500"}
              transition="all .3s ease"
            >
              {item}
            </Text>
            <ArrowRightIcon
              boxSize={3}
              color={index >= currentStep ? "gray.600" : "green.500"}
              transition="all .3s ease"
            />
          </HStack>
          :
          <Box key={index}>
            <Text color={index >= currentStep ? "gray.600" : "green.500"}>{item}</Text>
          </Box>
      ))}
      
    </Flex>
  )
};