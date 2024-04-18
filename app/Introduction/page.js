"use client";
import React from "react";
import { Stack, Text, Button, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
//Srcs
import Agenda from "../Agenda/page";
import Map from "../Map/page";
import Wish from "../Wish/page";
import Garllery from "../Garllery/page";

const MotionImage = motion(Image);
const MotionText = motion(Text);

export default function Introduction() {
  return (
    <Stack className="introduction-page" direction="column" spacing={6}>
      <MotionText
        className="invitation-title"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        ពិធីរៀបអាពាហ៍ពិពាហ៍
      </MotionText>
      <Stack direction="row" justifyContent="center">
        <MotionImage
          src="../../Images/bride-and-groom.png"
          alt="header-img"
          className="invitation-img"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
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

      <Text className="invitation-title-en" sx={{ marginTop: "200px" }}>
        Wedding party
      </Text>
      <Stack direction="row" justifyContent="center">
        <MotionImage
          src="../../Images/bride-and-groom.png"
          alt="header-img"
          className="invitation-img"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </Stack>

      <Stack direction="column" spacing={1}>
        <Stack direction="row">
          <Text className="wedding-family-title-en">Mr.</Text>
          <Text className="wedding-family-title-en">Lok Lok</Text>
        </Stack>
        <Stack direction="row">
          <Text className="wedding-family-name-en">Ms.</Text>
          <Text className="wedding-family-name-en">Lok Srey</Text>
        </Stack>
      </Stack>

      <Stack direction="column">
        <Text className="wedding-date-en">Save the date</Text>
        <Text className="wedding-date-en">Thursday 29<sup>th</sup> April 2024</Text>
      </Stack>

      <Box mt="200px">
        <Agenda />
      </Box>

      <Box mt="200px">
        <Map />
      </Box>

      <Box mt="200px">
        <Garllery />
      </Box>

      <Box mt="200px">
        <Wish />
      </Box>
    </Stack>
  );
}
