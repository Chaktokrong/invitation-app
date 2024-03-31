import React from "react";
import { useRouter } from "next/navigation";
import { Stack, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-page">
      <Stack direction="row" className="btn-container">
        <Box className="btn-menu">
          <Link href="/Agenda" passHref>
            កម្មវិធី
          </Link>
        </Box>
        <Box className="btn-menu">
          <Link href="/Map" passHref>
            ទីតាំង
          </Link>
        </Box>
        <Box className="btn-menu">
          <Link href="/Garllery" passHref>
            រូបភាព
          </Link>
        </Box>
        <Box className="btn-menu">
          <Link href="/Wish" passHref>
            ជូនពរ
          </Link>
        </Box>
      </Stack>
    </div>
  );
}
