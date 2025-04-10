"use client";
import { Stack, Text, Image, Box } from "@chakra-ui/react";
//Srcs

export default function Home() {
  return (
    <div className="home-page">
      <Box>
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
            <Text className="invitation-title-top" mt="40px">
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

            <Stack direction="column" spacing={1} sx={{ paddingTop: "40px" }}>
              <Text className="invitation-title">សូមគោរពអញ្ជើញ</Text>

              <Stack
                direction="row"
                justifyContent="center"
                className="guest-container"
              >
                <Image
                  src="../../Images/border-style-gold.png"
                  alt="Border"
                  w="330px"
                />
                <Text className="guest-name">ឈ្លី ចតុរ៉ុង</Text>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={1} sx={{ paddingTop: "10px" }}>
              <Text className="people-name">
                ថ្ងៃសៅរ៍ ទី០៣ ខែឧសភា ឆ្នាំ២០២៥
              </Text>
              <Text className="people-name">វេលាម៉ោង ១១​ ថ្ងៃត្រង់</Text>
              <Text className="invitation-des">
                ភូមិជ្រោយនាងងួន ឃុំជ្រោយនាងងួន ស្រុកស្រីស្នំ ខេត្តសៀមរាប
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={8}>
          <Stack direction="row" justifyContent="center" mb="-50px" mt="-10px">
            <Image
              src="../../Images/line-style.png"
              alt="Border"
              className="line-top"
            />
          </Stack>

          <Text className="invite-title">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</Text>
          <Text className="invitation-des" p="0px 15px">
            ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
            អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
            ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍
            របស់យើងខ្ញុំទាំងពីរ។
          </Text>

          <Stack direction="row" justifyContent="center" mb="-50px" mt="-50px">
            <Image
              src="../../Images/line-style.png"
              alt="Border"
              className="line-top"
            />
          </Stack>

          <Stack direction="column" spacing={3}>
            <Text className="invite-title">ទីតាំងកម្មវិធីមង្គល</Text>
            <Text className="invitation-address">
              ភូមិជ្រោយនាងងួន ឃុំជ្រោយនាងងួន ស្រុកស្រីស្នំ ខេត្តសៀមរាប
            </Text>
            <Stack direction="row" justifyContent="center" mt="-10px">
              <Image
                src="../../Images/map-code.png"
                alt="Map"
                w="80%"
                h="auto"
                objectFit="cover"
              />
            </Stack>
            <Stack direction="row" justifyContent="center">
              <a href="https://maps.app.goo.gl/dKRP19oYWszNVqH67" className="map-text">
                ចុចមើលទីតាំង
              </a>
            </Stack>
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            className="top-card"
            mt="20px"
          >
            <Image
              // src="../../Images/couple-01.JPG"
              src="../../Images/img-test.avif"
              alt="header-img"
              className="invitation-img"
            />
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="card-footer-container"
            >
              <Box className="card-inside"></Box>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="footer-text-container"
            >
              <Stack
                direction="column"
                spacing={10}
                h="300px"
                mt="40px"
                p="10px"
              >
                <Text className="people-name">សូមអរគុណ</Text>
                <Text className="people-name">
                  វត្តមានឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
                  ជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
