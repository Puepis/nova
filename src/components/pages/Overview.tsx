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
            width="200px"
            src={ScreeningPieChart}
            alt="Pie chart"
          />
          <Flex marginTop="18px">
            <Flex
              padding="4px 0px"
              direction="column"
              justifyContent="space-between"
            >
              <Image width="14px" src={GreenDot} alt="Green dot" />
              <Image width="14px" src={RedDot} alt="Red dot" />
              <Image width="14px" src={GrayDot} alt="Gray dot" />
            </Flex>
            <Flex
              marginLeft="16px"
              direction="column"
              justifyContent="flex-start"
              textAlign="left"
            >
              <Text fontWeight="medium">Done (652)</Text>
              <Text fontWeight="medium">Conflicts (34)</Text>
              <Text fontWeight="medium">Remaining (387)</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} direction="column" alignItems="center">
          <Heading size="md">Full Review Progress</Heading>
          <Image
            marginTop="18px"
            width="200px"
            src={FullReviewPieChart}
            alt="Pie chart"
          />
          <Flex marginTop="18px">
            <Flex
              padding="4px 0px"
              direction="column"
              justifyContent="space-between"
            >
              <Image width="14px" src={GreenDot} alt="Green dot" />
              <Image width="14px" src={GrayDot} alt="Gray dot" />
            </Flex>
            <Flex
              marginLeft="16px"
              direction="column"
              justifyContent="flex-start"
              textAlign="left"
            >
              <Text fontWeight="medium">Done (31)</Text>
              <Text fontWeight="medium">Remaining (76)</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Overview;
