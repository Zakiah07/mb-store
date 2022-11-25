import React from "react";
import { Stack, Text, Group, Title, Button } from "@mantine/core";
import Image from "next/image";

type Props = {};

const Intro = (props: Props) => {
  return (
    <Stack
      align="center"
      justify="center"
      sx={{ height: "80vh" }}
    >
      <Group
        position="apart"
        sx={{ width: "70vw" }}
        noWrap
      >
        <Stack sx={{ width: "40vw" }}>
          <Title
            size={60}
            weight={700}
          >
            Happy Gut, Happy Life !
          </Title>
          <Text size={30}>Reduce your worriness about your health</Text>
          <Text>
            Super Berry helps you with your gut so you can enjoy your life as
            usual.
          </Text>
          <Button sx={{ width: "200px" }}>Buy now</Button>
        </Stack>
        <Image
          src="/banners/productsample.png"
          alt="SuperBerry sample"
          width={500}
          height={400}
        />
      </Group>
    </Stack>
  );
};

export default Intro;
