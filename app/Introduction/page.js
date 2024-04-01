import React from "react";
import { Stack, Text, Button, Image } from "@chakra-ui/react";
//Srcs
import Footer from "@/components/Footer";

export default function Introduction() {
  return (
    <Stack className="introduction-page" direction="column" spacing={6}>
      <Text className="invitation-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</Text>
      <Stack direction="row" justifyContent="center">
        <Image
          src="../../Images/bride-and-groom.png"
          alt="header-img"
          className="invitation-img"
        />
      </Stack>

      <Stack direction="column" spacing={1}>
        <Stack direction="row">
          <Text className="wedding-family-title">លោក</Text>
          <Text className="wedding-family-title">លោកស្រី</Text>
        </Stack>
        <Stack direction="row">
          <Text className="wedding-family-name">លោក</Text>
          <Text className="wedding-family-name">លោកស្រី</Text>
        </Stack>
      </Stack>

      <Text className="wedding-date">ថ្ងៃ សុក្រ ទី ២៩ ខែមីនា ឆ្នាំ២០២៤</Text>

      <Stack direction="row" justifyContent="center">
        <Button className="btn-save-date">Click to save the date</Button>
      </Stack>

      <Text className="invitation-title" sx={{ marginTop: '200px' }}>Wedding party</Text>
      <Stack direction="row" justifyContent="center">
        <Image
          src="../../Images/bride-and-groom.png"
          alt="header-img"
          className="invitation-img"
        />
      </Stack>

      <Stack direction="column" spacing={1}>
        <Stack direction="row">
          <Text className="wedding-family-title">Mr.</Text>
          <Text className="wedding-family-title">Lok Lok</Text>
        </Stack>
        <Stack direction="row">
          <Text className="wedding-family-name">Ms.</Text>
          <Text className="wedding-family-name">Lok Srey</Text>
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
}
