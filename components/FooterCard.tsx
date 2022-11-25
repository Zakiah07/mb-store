import { Group, Text, Stack, Footer } from "@mantine/core";
import React from "react";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

type Props = {};

const FooterCard = (props: Props) => {
  return (
    <Footer
      height={80}
      p="md"
      withBorder={false}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        background: theme.colors.violet[0],
      })}
    >
      <Text
        color="grape.9"
        weight={700}
      >
        MERRYBERRY
      </Text>
      <Stack>
        Find us on social media
        <Group align="center">
          <IoLogoInstagram />
          <FaTiktok />
          <IoLogoFacebook />
        </Group>
      </Stack>
    </Footer>
  );
};

export default FooterCard;
