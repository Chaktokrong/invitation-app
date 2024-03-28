import React from "react";
import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";
//Srcs
// import 

const WelomePage = () => {
  return (
    <div className="welcome-page">
      <Box className="main-container">
        <Box className="box-container">
          <SimpleGrid
            columns={[1, null, 2, null, 3]}
            spacingX="40px"
            spacingY="20px"
            className="container-Grid"
          >
            <Box className="container-text">
              <Text className="header-title">About</Text>
              <Text className="header-discraption">
                sdfsf
              </Text>
            </Box>
            <Box className="container-img">
              <Image
                src="../../Images/bride-and-groom.png"
                alt="header-img"
                className="header-img"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default WelomePage;
