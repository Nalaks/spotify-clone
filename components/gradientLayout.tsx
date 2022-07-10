import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GradientLayoutProps } from "../types/types";

const GradientLayout: FC<GradientLayoutProps> = ({
  children,
  color,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
      height="100%"
      overflowY="auto"
    >
      <Flex bg={`${color}.600`} p="40px" align="end">
        <Box p="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          />
        </Box>
      </Flex>

      {children}
    </Box>
  );
};

export default GradientLayout;
