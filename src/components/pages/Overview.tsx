import React from "react";
import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import ScreeningPieChart from "../../assets/screening_pie.svg";
import FullReviewPieChart from "../../assets/review_pie.svg";
import GreenDot from "../../assets/green_dot.svg";
import RedDot from "../../assets/red_dot.svg";
import GrayDot from "../../assets/gray_dot.svg";

const Overview = () => {
  return (
    <Flex direction="column">
      <Heading size="xl" marginTop="36px">
        Welcome back!
      </Heading>
      <Text marginTop="14px" color="#3F3D56" fontSize="18px">
        You’ve reviewed a total of 253 studies so far
      </Text>
      <Flex marginTop="32px">
        <Flex flex={1} direction="column" alignItems="center">
          <Heading size="md">Screening Progress</Heading>
          <Image
            marginTop="18px"
            width="150px"
            src={ScreeningPieChart}
            alt="Pie chart"
          />
        </Flex>
        <Flex flex={1} direction="column" alignItems="center">
          <Heading size="md">Full Review Progress</Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Overview;
