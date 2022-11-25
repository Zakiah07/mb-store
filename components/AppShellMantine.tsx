import {
	AppShell,
	Header,
	Text,
	useMantineTheme,
} from '@mantine/core';
import { ReactNode } from 'react';
import FooterCard from './FooterCard';

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
				<FooterCard />
			}
			header={
				<Header height={{ base: 50, md: 70 }} p="md" withBorder={false} sx={{ background: theme.colors.violet[0] }}>
					<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
						<Text color="grape.9" weight={700}>MERRYBERRY</Text>
					</div>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
}

export default AppShellMantine;