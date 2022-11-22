import {
    AppShell,
    Header,
    Footer,
    Text,
    useMantineTheme,
} from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

function AppShellMantine({ children }: Props) {
    const theme = useMantineTheme();
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Text>Application header</Text>
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
    );
}

export default AppShellMantine;