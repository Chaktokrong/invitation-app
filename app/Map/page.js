"use client"
import React from "react";
import { Stack, Divider, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text)

export default function Map() {
  return (
    <Stack className="map-page" direction="column" spacing={6}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <MotionText className="map-title"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >ផែនទី | Map</MotionText>
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
    </Stack>
  );
}
