import React from "react";
import { Stack, Text, Box, Divider } from "@chakra-ui/react";
//Icons
import { FaArrowDownLong } from "react-icons/fa6";
//Srcs

export default function Agenda() {
  const agendaMorning = [
    {
      time: "6 : 30 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
    {
      time: "6 : 30 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
    {
      time: "6 : 30 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
    {
      time: "6 : 30 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
    {
      time: "6 : 30 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
    {
      time: "6 : 30 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
  ];
  const agendaEvening = [
    {
      time: "5 : 00 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
    {
      time: "5 : 00 AM",
      title: "កម្មវិធីអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស",
    },
  ];
  const agendaMorningEn = [
    {
      time: "6 : 30 AM",
      title: "The audian come",
    },
    {
      time: "6 : 30 AM",
      title: "The audian come",
    },
    {
      time: "6 : 30 AM",
      title: "The audian come",
    },
    {
      time: "6 : 30 AM",
      title: "The audian come",
    },
    {
      time: "6 : 30 AM",
      title: "The audian come",
    },
    {
      time: "6 : 30 AM",
      title: "The audian come",
    },
  ];
  const agendaEveningEn = [
    {
      time: "5 : 00 AM",
      title: "The Dinner",
    },
    {
      time: "5 : 00 AM",
      title: "The Dinner",
    },
  ];

  // console.log("sdf", agendaEveningEn[agendaEveningEn.length - 1])

  return (
    <Stack className="agenda-page" direction="column" spacing={6}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <Text className="agenda-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</Text>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" className="morning-agenda">
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
            <Text className="morning-title" sx={{ width: "280px" }}>
              កម្មវិធីពេលព្រឹក
            </Text>
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
          </Stack>

          {agendaMorning?.map((row, index) => {
            return (
              <Stack direction="column" key={index}>
                <Text className="time-title">{row?.time}</Text>
                <Text className="agenda-des">{row?.title}</Text>
                {agendaMorning?.length}
                <Stack direction="row" justifyContent="center">
                  <FaArrowDownLong className="arrow-icon" />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" className="morning-agenda">
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
            <Text className="morning-title" sx={{ width: "280px" }}>
              កម្មវិធីពេលល្ងាច
            </Text>
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
          </Stack>

          {agendaEvening?.map((row, index) => {
            return (
              <Stack direction="column" key={index}>
                <Text className="time-title">{row?.time}</Text>
                <Text className="agenda-des">{row?.title}</Text>
                <Stack direction="row" justifyContent="center">
                  <FaArrowDownLong className="arrow-icon" />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Stack direction="column" sx={{ marginTop: "200px" }}>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
        <Text className="agenda-title-en">Event Agenda</Text>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" className="morning-agenda">
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
            <Text className="morning-title-en" sx={{ width: "280px" }}>
              Morning Schedule
            </Text>
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
          </Stack>

          {agendaMorningEn?.map((row, index) => {
            return (
              <Stack direction="column" key={index}>
                <Text className="time-title">{row?.time}</Text>
                <Text className="agenda-des-en">{row?.title}</Text>
                <Stack direction="row" justifyContent="center">
                  <FaArrowDownLong className="arrow-icon" />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" className="morning-agenda">
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
            <Text className="morning-title-en" sx={{ width: "280px" }}>
              Evening Schedule
            </Text>
            <Stack
              direction="column"
              justifyContent="center"
              className="divider-container"
            >
              <Box className="divider-title" />
            </Stack>
          </Stack>

          {agendaEveningEn?.map((row, index) => {
            return (
              <Stack direction="column" key={index}>
                <Text className="time-title">{row?.time}</Text>
                <Text className="agenda-des-en">{row?.title}</Text>
                {agendaEveningEn[agendaEveningEn.length - 1] ===
                agendaEveningEn.length ? null : (
                  <Stack direction="row" justifyContent="center">
                    <FaArrowDownLong className="arrow-icon" />
                  </Stack>
                )}
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
