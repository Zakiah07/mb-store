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
					background: theme.colors.violet[0],
				},
			}}
			footer={
				<Footer height={60} p="md" withBorder={false} sx={{ background: theme.colors.violet[0] }}>
					Application footer
				</Footer>
			}
			header={
				<Header height={{ base: 50, md: 70 }} p="md" withBorder={false} sx={{ background: theme.colors.violet[0] }}>
					<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
						<Text color="grape.9" weight={500}>MERRYBERRY</Text>
					</div>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
}

export default AppShellMantine;