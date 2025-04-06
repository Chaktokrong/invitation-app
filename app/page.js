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
            // src="../../Images/couple-01.JPG"
            src="../../Images/img-test.avif"
            alt="header-img"
            className="invitation-img"
          />
          <Stack
            direction="column"
            spacing={4}
            className="empty-card-container"
          ></Stack>
          <Stack direction="column" spacing={4} className="top-text-container">
            <Text className="invitation-title" mt="50px">សិរីមង្គលអាពាហ៍ពិពាហ៍</Text>
            <Stack direction="column" spacing={1}>
              <Text className="invitation-title">ឈ្លី​ ចតុរ៉ុង</Text>
              <Stack direction="row" justifyContent="center">
                <Image
                  src="../../Images/heart-gif.webp"
                  alt="Gif"
                  style={{ width: "80px" }}
                />
              </Stack>
              <Text className="invitation-title">ហ៊ុល សូភីម</Text>

              <Text className="invitation-title">សូមគោរពអញ្ជើញ</Text>
            </Stack>
          </Stack>
        </Stack>
        {/* <Text className="invitation-des">សូមគោរពអញ្ជើញ</Text>nn
        <Text className="invitation-des">ឯកឧត្តម និងលោកជំទាវ</Text> */}
      </Stack>
    </div>
  );
}
