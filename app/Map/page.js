import React from "react";
import { Stack, Divider } from "@chakra-ui/react";

export default function Map() {
  return (
    <Stack className="agenda-page" direction="column" spacing={6}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <Text className="agenda-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</Text>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
      </Stack>
    </Stack>
  );
}
