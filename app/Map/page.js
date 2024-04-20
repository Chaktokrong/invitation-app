"use client"
import React from "react";
import { Stack, Divider, Text, Image, Button } from "@chakra-ui/react";

export default function Map() {
  return (
    <Stack className="map-page" direction="column" spacing={6}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Text className="map-title">ផែនទី</Text>
            <Text className="map-title">|</Text>
            <Text className="map-title-en">MAP</Text>
          </Stack>
        </Stack>
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
