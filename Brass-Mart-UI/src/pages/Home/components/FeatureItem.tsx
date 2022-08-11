import { Stack, Flex, Text, Box } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  background?: string;
};

function FeatureItem({children, title, description, background}: Props) {
  return (
    <Stack
      backgroundImage={`url(${background})` || undefined}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      p={6}
      // minW={100}
    >
      <Flex
        w={12}
        h={12}
        align='center'
        justify='center'
        rounded='full'
        bg='white'
        mb={1}
      >
        {children}
      </Flex>
      <Box
        backgroundColor="white"
        opacity={"80%"}
        p={2}
        // maxW={{sm: 80}}
      >
        <Text
          fontWeight={800}
        >
          {title}
        </Text>
        <Text
          color="gray.600"
          fontWeight={600}
        >
          {description}
        </Text>
      </Box>
    </Stack>
  );
}

export default FeatureItem;