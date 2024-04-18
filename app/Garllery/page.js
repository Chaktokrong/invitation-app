import React from "react";
import { Stack, Divider, Text, Image } from "@chakra-ui/react";

export default function Garllery() {
  return (
    <Stack className="garllery-page" direction="column" spacing={6}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <Text className="garllery-title">រូបភាព | GARLLERY</Text>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Image
          src="../../Images/bride-and-groom.png"
          alt="header-img"
          className="map-img"
        />
      </Stack>
    </Stack>
  );
}
