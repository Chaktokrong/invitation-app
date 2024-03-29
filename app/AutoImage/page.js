import React from "react";
import { Stack, Box, Text, Image } from "@chakra-ui/react";

export default function AutoImage() {
  return (
    <div className="auto-image">
      <Text className="invitation-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</Text>
      <Stack direction="row" justifyContent="center">
        <Image
          src="../../Images/bride-and-groom.png"
          alt="header-img"
          className="invitation-img"
        />
      </Stack>

      <Stack direction="row">
        <Text className="wedding-family-title">លោក</Text>
        <Text className="wedding-family-title">លោកស្រី</Text>
      </Stack>
      <Stack direction="row">
        <Text className="wedding-family-name">លោក</Text>
        <Text className="wedding-family-name">លោកស្រី</Text>
      </Stack>
      <Text className="wedding-family-title">
        ថ្ងៃ សុក្រ ទី ២៩ ខែមីនា ឆ្នាំ២០២៤
      </Text>
    </div>
  );
}
