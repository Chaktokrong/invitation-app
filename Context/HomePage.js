"use client";
import { Stack, Text, Image, Box } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
//Image loading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function HomePage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("guest") || "";

  const splitName = query?.split("-");
  const guestName =
    splitName?.length > 1 ? splitName[0] + " " + splitName[1] : query;
  // console.log("guestName::", guestName);

  return (
    <div className="home-page">
      <Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="top-card"
        >
          <LazyLoadImage
            src="../../Images/welcome-pic.jpg"
            alt="header-img"
            className="invitation-img"
            height={"100%"}
            width={"100%"}
            effect="blur"
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

            <Stack direction="column" spacing={0} sx={{ paddingTop: "40px" }}>
              <Text className="invitation-title">សូមគោរពអញ្ជើញ</Text>

              <Stack
                direction="row"
                justifyContent="center"
                className="guest-container"
              >
                <Image
                  src="../../Images/border-style.png"
                  // src="../../Images/border-style-gold.png"
                  alt="Border"
                  w="340px"
                />
                <Text className="guest-name-small">{guestName}</Text>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={1}>
              <Text className="people-name">
                ថ្ងៃសៅរ៍ ទី០៣ ខែឧសភា ឆ្នាំ២០២៥
              </Text>
              <Text className="people-name">វេលាម៉ោង ១១ : ០០​ ថ្ងៃត្រង់</Text>
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

          <Stack direction="row" justifyContent="center" mb="-50px" mt="-60px">
            <Image
              src="../../Images/line-style.png"
              alt="Border"
              className="line-bottom"
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
                w="280px"
                h="auto"
                objectFit="cover"
              />
            </Stack>
            <Stack direction="row" justifyContent="center">
              <a
                href="https://maps.app.goo.gl/dKRP19oYWszNVqH67"
                className="map-text"
              >
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
            <LazyLoadImage
              src="../../Images/thanks-pic.jpg"
              alt="header-img"
              className="footer-img"
              height={"100%"}
              width={"100%"}
              effect="blur"
            />
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="card-footer-container"
            >
              <Box className="card-inside" />
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="footer-text-container"
            >
              <Stack direction="column" spacing={8} h="300px" p="10px">
                {/* <Text className="people-name">សូមអរគុណ</Text> */}
                <Stack direction="row" justifyContent="center" mt="-30px">
                  <Image
                    src="../../Images/thank-you-thanks.gif"
                    alt="Gif"
                    style={{ width: "160px" }}
                  />
                </Stack>
                <Text className="thanks-text">
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
