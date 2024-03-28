import React from "react";
import { Stack, Image } from "@chakra-ui/react";

export default function AutoImage() {
  return (
    <Stack direction="row" justifyContent="center">
      <Image
        src="../../Images/bride-and-groom.png"
        alt="header-img"
        className="invitation-img"
      />
    </Stack>
  );
}
