import React from "react";
import { Stack, Text, Divider } from "@chakra-ui/react";
//Icons
import { FaArrowDownLong } from "react-icons/fa6";
//Srcs
import Footer from "@/components/Footer";

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
          <Text className="morning-title">កម្មវិធីពេលព្រឹក</Text>
          {agendaMorning?.map((row, index) => {
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

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" className="morning-agenda">
          <Text className="morning-title">កម្មវិធីពេលល្ងាច</Text>

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
        <Text className="agenda-title">Event Agenda</Text>
        <Stack direction="row" justifyContent="center">
          <Divider className="divider-bottom" />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" className="morning-agenda">
          <Text className="morning-title">Morning Schedule</Text>
          {agendaMorningEn?.map((row, index) => {
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

      <Stack direction="row" justifyContent="center">
        <Stack direction="column" className="morning-agenda">
          <Text className="morning-title">Evening Schedule</Text>

          {agendaEveningEn?.map((row, index) => {
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

      <Footer />
    </Stack>
  );
}
