import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";

export default function AutoImage() {
  return (
    <Stack className="auto-image" direction="column" spacing={6}>
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
      <Text className="wedding-date">
        ថ្ងៃ សុក្រ ទី ២៩ ខែមីនា ឆ្នាំ២០២៤
      </Text>
    </Stack>
  );
}
