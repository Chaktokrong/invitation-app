import React from "react";
import { Stack, Image } from "@chakra-ui/react";
// import { motion } from "framer-motion"
// const MotionBox = motion(Box)

export default function AutoImage() {
  return (
    <Stack direction="row" justifyContent="center">

      <motion.Image
        src="../../Images/bride-and-groom.png"
        alt="header-img"
        className="invitation-img"
      />
    </Stack>
  );
}
