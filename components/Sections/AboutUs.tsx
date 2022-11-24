import React from 'react'
import { Stack, Text, Group, Title } from '@mantine/core'
import Image from 'next/image'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <Stack align='center' my='10vh'>
            <Group position='apart' sx={{ width: "70vw" }} noWrap>
                <Image
                    src="/banners/berrybasket.jpg"
                    alt="Basket of berries"
                    width={400}
                    height={300}
                />
                <Stack sx={{ width: "40vw" }}>
                    <Title size={40} weight={700}>About Us</Title>
                    <Text size={20} >We want you to experience an improvement in your life that focuses on your health and positive lifestyle with our well-researched formulation .</Text>
                </Stack>
            </Group>
        </Stack>
    )
}

export default AboutUs