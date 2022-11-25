import {
  Group,
  Text,
  Stack,
  Footer,
  Title,
  Anchor,
  ActionIcon,
} from "@mantine/core";
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

type Props = {};

const FooterCard = (props: Props) => {
  return (
    <Footer
      height={280}
      withBorder={false}
      sx={(theme) => ({
        position: "inherit",
        display: "flex",
        justifyContent: "center",
        background: theme.colors.violet[0],
      })}
    >
      <Stack
        align="center"
        spacing="xl"
      >
        <Text
          color="grape.9"
          weight={700}
          fz={25}
        >
          MERRYBERRY
        </Text>
        <Title order={4}>Find us on social media</Title>
        <Group align="center">
          <ActionIcon
            color="grape.9"
            variant="filled"
            size="xl"
            radius="xl"
          >
            <IoLogoInstagram size={34} />
          </ActionIcon>
          <ActionIcon
            color="grape.9"
            variant="filled"
            size="xl"
            radius="xl"
          >
            <FaTiktok size={26} />
          </ActionIcon>
          <ActionIcon
            color="grape.9"
            variant="filled"
            size="xl"
            radius="xl"
          >
            <FaFacebookF size={28} />
          </ActionIcon>
          <ActionIcon
            color="grape.9"
            variant="filled"
            size="xl"
            radius="xl"
          >
            <MdOutlineEmail size={28} />
          </ActionIcon>
        </Group>
        <Title order={5}>
          For queries and support, please email{" "}
          <Text
            color="grape.9"
            span
          >
            <Anchor
              href="mailto:superberrymy@gmail.com"
              color="grape.9"
              underline
            >
              superberrymy@gmail.com
            </Anchor>
          </Text>
          .
        </Title>
      </Stack>
    </Footer>
  );
};

export default FooterCard;
