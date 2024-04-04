import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-page">
      <Box className="box-container">
        <Stack direction="row" className="btn-container">
          {/* <Link href="/Agenda" passHref className="link">
            ទំព័រដើម
          </Link> */}
          <Link href="/Agenda" passHref className="link">
            កម្មវិធី
          </Link>
          <Link href="/Map" passHref className="link">
            ទីតាំង
          </Link>
          <Link href="/Garllery" passHref className="link">
            រូបភាព
          </Link>
          <Link href="/Wish" passHref className="link">
            ជូនពរ
          </Link>
        </Stack>
      </Box>
    </div>
  );
}
