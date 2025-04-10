"use client";
import { Stack, Text, Image, Button } from "@chakra-ui/react";
//Srcs

export default function Home() {
  return (
    <div className="home-page">
      <Stack direction="column" spacing={10}>
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
          <Stack direction="column" spacing={5} className="top-text-container">
            <Text className="invitation-title-top" mt="50px">
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </Text>

            <Stack direction="column" spacing={0} sx={{ paddingTop: "100px" }}>
              <Text className="people-name">ឈ្លី​ ចតុរ៉ុង</Text>
              <Stack direction="row" justifyContent="center">
                <Image
                  src="../../Images/heart-gif.webp"
                  alt="Gif"
                  style={{ width: "80px" }}
                />
              </Stack>
              <Text className="people-name">ហ៊ុល សូភីម</Text>
            </Stack>

            <Stack direction="column" spacing={1} sx={{ paddingTop: "50px" }}>
              <Text className="invitation-title">សូមគោរពអញ្ជើញ</Text>
              <img src="" />
            </Stack>

            <Stack direction="column" spacing={1} sx={{ paddingTop: "50px" }}>
              <Text className="invite-title">
                ថ្ងៃសៅរ៍ ទី០៣ ខែឧសភា ឆ្នាំ២០២៥
              </Text>
              <Text className="invitation-des">
                ភូមិជ្រោយនាងងួន ឃុំជ្រោយនាងងួន ស្រុកស្រីស្នំ ខេត្តសៀមរាប
              </Text>
            </Stack>
          </Stack>
        </Stack>

        {/* <Stack direction="column" spacing={2}> */}
        <Text className="invite-title">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</Text>
        <Text className="invitation-des">
          ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
          អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្តី
          ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។
        </Text>
        {/* </Stack> */}

        <Text className="invite-title">ទីតាំងកម្មវិធីមង្គល</Text>
      </Stack>
    </div>
  );
}
