"use client"
import React from "react";
import { Stack, Divider, Text, Image } from "@chakra-ui/react";

export default function Map() {
  return (
    <Stack className="map-page" direction="column" spacing={6}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <Text className="map-title">ផែនទី | Map</Text>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Image
          src="../../Images/map.jpg"
          alt="header-img"
          className="map-img"
        />
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Button className="btn-save-map">Click to view map</Button>
      </Stack>
    </Stack>
  );
}
