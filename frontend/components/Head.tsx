import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Box, Flex, Text } from "@chakra-ui/react";

export const Head: React.FC = () => {
  return (
    <Box m="10px 20px">
      <Flex direction="row" justify="space-between">
        <Text fontWeight="bold" fontSize="2xl">
          zk Hide and Seek
        </Text>
        <Box>
          <ConnectButton />
        </Box>
      </Flex>
    </Box>
  );
};
