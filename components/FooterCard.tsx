import { Group, Text, Stack } from '@mantine/core'
import React from 'react'
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io'
import { FaTiktok } from 'react-icons/fa'

type Props = {}

const FooterCard = (props: Props) => {
    return (
        <Group position='center'>
            <Text color="grape.9" weight={700}>MERRYBERRY</Text>
            <Stack>
                Find us on social media
                <Group align='center'>
                    <IoLogoInstagram />
                    <FaTiktok />
                    <IoLogoFacebook />
                </Group>
            </Stack>
        </Group >
    )
}

export default FooterCard