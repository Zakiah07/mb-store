import React from 'react'
import { Stack, Text, Box } from '@mantine/core'

type Props = {
    name: string
    comment: string
}

const FeedbackBox = ({ name, comment }: Props) => {
    return (
        <Box sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
            textAlign: 'center',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: 'pointer',

            '&:hover': {
                backgroundColor:
                    theme.colors.grape[2],
            },
        })}>
            <Stack align="center" sx={{ width: 180 }} spacing='xs'>
                <Text>{name}</Text>
                <Text>{comment}</Text>
            </Stack>
        </Box>
    )
}

export default FeedbackBox