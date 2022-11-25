import Head from "next/head";
// import Image from 'next/image'
import { Stack, Group, Title } from "@mantine/core";
import React from "react";
import FeedbackBox from "../components/Sections/FeedbackBox";
import Ingredients from "../components/Sections/Ingredients";
import Intro from "../components/Sections/Intro";
import AboutUs from "../components/Sections/AboutUs";
import ContactUs from "../components/Sections/ContactUs";

export default function Home() {
  return (
    <Stack>
      <Head>
        <title>MERRY BERRY</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Stack>
        <Intro />
        <AboutUs />
        <Stack
          align="center"
          justify="center"
          sx={{ height: "80vh" }}
        >
          <Title
            size={50}
            weight={700}
            pb={20}
          >
            Feedbacks
          </Title>
          <Group
            position="apart"
            sx={{ width: "50vw" }}
            pb={150}
            align="center"
          >
            <FeedbackBox
              name="Linda"
              comment="It is so good!"
            />
            <FeedbackBox
              name="Linda"
              comment="It is so good!"
            />
            <FeedbackBox
              name="Linda"
              comment="It is so good!"
            />
            <FeedbackBox
              name="Linda"
              comment="It is so good!"
            />
            <FeedbackBox
              name="Linda"
              comment="It is so good!"
            />
            <FeedbackBox
              name="Linda"
              comment="It is so good!"
            />
          </Group>
        </Stack>
        <Ingredients />
        <ContactUs />
      </Stack>
    </Stack>
  );
}
