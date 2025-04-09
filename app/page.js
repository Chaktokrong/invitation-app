"use client";
import { useEffect, useRef } from "react";
import { Stack, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Fireworks } from "fireworks-js";
//Srcs

export default function Home() {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 30 },
      rocketsPoint: 50,
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      trace: 3,
      explosion: 5,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: { min: 0.015, max: 0.03 },
      },
      boundaries: {
        x: 50,
        y: 50,
        width: window.innerWidth - 100,
        height: window.innerHeight - 100,
      },
      sound: {
        enable: false,
      },
    });

    fireworks.start();

    return () => {
      fireworks.stop();
    };
  }, []);

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
          <Stack direction="column" spacing={4} className="top-text-container">
            <div
              ref={containerRef}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />
            <Text className="invitation-title" mt="50px">
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </Text>
            <Stack direction="column" spacing={0}>
              <Text className="people-name">ឈ្លី​ ចតុរ៉ុង</Text>
              <Stack direction="row" justifyContent="center">
                <Image
                  src="../../Images/heart-gif.webp"
                  alt="Gif"
                  style={{ width: "80px" }}
                />
              </Stack>
              <Text className="people-name">ហ៊ុល សូភីម</Text>

              <Text className="invite-title">សូមគោរពអញ្ជើញ</Text>
              <img src="" />
            </Stack>

            <Text className="invitation-title">
              ថ្ងៃសៅរ ទី០៣ ខែឧសភា ឆ្នាំ២០២៥
            </Text>
            <Text className="invitation-des">
              ភូមិជ្រោយនាងងួន ឃុំជ្រោយនាងងួន ស្រុកស្រីស្នំ ខេត្តសៀមរាប
            </Text>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={2}>
          <Text className="invitation-title">
            យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
          </Text>
          nn
          <Text className="invitation-des">
            ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
            អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
            ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍
            របស់យើងខ្ញុំទាំងពីរ។
          </Text>
        </Stack>

        <Text className="invitation-title">ទីតាំងកម្មវិធីមង្គល</Text>
      </Stack>
    </div>
  );
}
