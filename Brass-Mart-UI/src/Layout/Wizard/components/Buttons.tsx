import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useWizardContext } from "./WizardContext";

interface ButtonProps {
  text: string;
};

function NextButton({
  text
}: ButtonProps) {
  const { goNext } = useWizardContext();
  return (
    <Button
      colorScheme="green"
      rightIcon={text !== "Place Order" ? <ArrowForwardIcon /> : undefined}
      onClick={goNext}
    >
      {text}
    </Button>
  );
};

function PrevButton({
  text
}: ButtonProps) {
  const { goPrev } = useWizardContext();
  return (
    <Button
      leftIcon={<ArrowBackIcon />}
      onClick={goPrev}
    >
      {text}
    </Button>
  );
};

export { NextButton, PrevButton };