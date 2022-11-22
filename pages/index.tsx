import Head from 'next/head'
// import Image from 'next/image'
import { Stack, Text } from '@mantine/core'
import ContentCard from '../components/ContentCard'

export default function Home() {
  return (

    <Stack>
      <Head>
        <title>MERRY BERRY</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ContentCard />
    </Stack>
  )
}
