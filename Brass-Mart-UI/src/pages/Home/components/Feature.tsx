import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { FaHandshake, FaMoneyBillWave, FaShoppingBag } from "react-icons/fa"
import FeatureItem from "./FeatureItem"

function Feature() {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
      >
        <FeatureItem
          title="Buy"
          description="Buy vintage and used trombones and other brass instruments."
          background="https://i.imgur.com/U2qus4Tl.jpg"
        >
          <FaShoppingBag />
        </FeatureItem>
        <FeatureItem
          title="Sell"
          description="We'll sell your instruments and accessories and take an industry-low commission."
          background="https://i.imgur.com/XbIdmdAl.png"
        >
          <FaMoneyBillWave />
        </FeatureItem>
        <FeatureItem
          title="Trade"
          description="Trade in your instrument to put toward a new horn!"
          background="https://i.imgur.com/VvRViWsh.jpg"
        >
          <FaHandshake />
        </FeatureItem>
      </SimpleGrid>
    </Box>
  )
}

export default Feature