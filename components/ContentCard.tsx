import { Stack, Text, Group, Paper } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ContentCard = () => {
  return (
    <Stack>
      <Stack align='center'>
        <Text size={40}>Happy Gut, Happy Life !</Text>
        <Image
          src="/banners/berrybasket.jpg"
          alt="Basket of berries"
          width={500}
          height={300}
        />
      </Stack>
      {/* <Paper mt="10vh" > */}
      <div color='violet.9'>
        <Stack align='center' >
          <Group position='apart'>
            <Text size={32}>{"Let's change your lifestyle by consuming this"}</Text>
            <Image
              src="/banners/productsample.png"
              alt="SuperBerry sample"
              width={500}
              height={500}
            />
          </Group>
        </Stack>
      </div>
      {/* </Paper> */}
    </Stack >
  )
}

export default ContentCard