import React from "react";
import { Box, Stack, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
//Srcs
// import

const WelomePage = () => {
  return (
    <div className="welcome-page">
      <Text className="invitation-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</Text>
      <Stack direction="row" justifyContent="center">
        <Image
          src="../../Images/bride-and-groom.png"
          alt="header-img"
          className="invitation-img"
        />
      </Stack>
      <Text className="invitation-title">សូមគោរពអញ្ជើញ</Text>
      <Text className="invitation-title">ឯកឧត្តម និងលោកជំទាវ</Text>

      <Stack direction="row" justifyContent="center">
        <Link href="/AutoImage" passHref>
          <Button className="button-to-open">សូមចុចដើម្បីបើកសំបុត្រ</Button>
        </Link>
      </Stack>
    </div>
  );
};

export default WelomePage;
