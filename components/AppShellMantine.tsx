import { AppShell, Header, Text, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";
import FooterCard from "./FooterCard";

type Props = {
  children: ReactNode;
};

function AppShellMantine({ children }: Props) {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.violet[0],
          paddingBottom: 100,
        },
      }}
      footer={<FooterCard />}
      header={
        <Header
          height={{ base: 50, md: 70 }}
          withBorder={false}
          sx={(theme) => ({
            background: theme.colors.violet[0],
            justifyContent: "center",
            display: "flex",
          })}
        >
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text
              fz={30}
              color="grape.9"
              weight={700}
            >
              MERRYBERRY
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default AppShellMantine;
