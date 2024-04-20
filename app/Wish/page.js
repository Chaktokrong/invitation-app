import React from "react";
import { Stack, Divider, Text, Input, Button } from "@chakra-ui/react";

export default function Wish() {
  return (
    <Stack className="wish-page" direction="column" spacing={6}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Text className="wish-title">សារជូនពរ</Text>
            <Text className="wish-title">|</Text>
            <Text className="wish-title-en">WISH MESSAGE</Text>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" spacing={4} w="80%">
          <Input placeholder="name" />
          <Input placeholder="comment" multiple rowGap={5} />
          <Stack direction="row" justifyContent="center">
            <Button className="btn-save">
              Save
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
