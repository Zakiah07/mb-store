import React from "react";
import { Stack, Title } from "@mantine/core";
import Image from "next/image";

// type Props = {}

const Ingredients = () => {
  return (
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
        Ingredients
      </Title>
      <Image
        src="/banners/berrybasket.jpg"
        alt="Basket of berries"
        width={400}
        height={300}
      />
    </Stack>
  );
};

export default Ingredients;
