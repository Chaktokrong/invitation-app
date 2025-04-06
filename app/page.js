import { Stack, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
//Srcs

export default function Home() {
  return (
    <div className="home-page">
      <Stack direction="column" spacing={4}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="top-card"
        >
          <Image
            src="../../Images/couple-01.JPG"
            alt="header-img"
            className="invitation-img"
          />
          <Stack
            direction="column"
            spacing={4}
            className="empty-card-container"
          ></Stack>
          <Stack direction="column" spacing={4} className="top-text-container">
            <Text className="invitation-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</Text>
          </Stack>
        </Stack>
        {/* <Text className="invitation-des">សូមគោរពអញ្ជើញ</Text>nn
        <Text className="invitation-des">ឯកឧត្តម និងលោកជំទាវ</Text> */}
      </Stack>
    </div>
  );
}
