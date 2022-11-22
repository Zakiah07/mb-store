import { Stack, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ContentCard = () => {
  return (
    <Stack align='center'>
      <Text>Happy Gut, Happy Life !</Text>
      <Image
        src="/../banner/berrybasket.jpg"
        alt="Basket of berries"
        width={500}
        height={500}
      />
    </Stack>
  )
}

export default ContentCard