import React from "react";
import { Stack, Text, Title, Button } from "@mantine/core";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <Stack
      align="center"
      justify="center"
      sx={{ height: "60vh" }}
    >
      <Title
        size={50}
        weight={700}
      >
        Contact Us !
      </Title>
      <Text size={30}>{"You're a step away from your dream gut"}</Text>
      <Text>Happiness is when your tummy is in the pink of health</Text>
      <Button sx={{ width: "200px" }}>Buy now</Button>
    </Stack>
  );
};

export default ContactUs;
