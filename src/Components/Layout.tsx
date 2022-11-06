import React from "react";
import {AppShell, Button, Center, Group, Header, Text} from "@mantine/core";
import {Outlet,} from "react-router-dom";

export function Layout() {
    return (
        <AppShell padding={0} styles={{
            main: {
                width: "100vw",
                height: "100vh",
            }
        }} fixed header={
            <Header height={70}>
                <Group sx={{height: '100%'}} px={20} position="apart">
                    <Text size="lg" weight="bolder">Zitate der Fetten</Text>
                    <Group>
                        <Button variant="light">About us</Button>
                        <Button variant="light" component='a'>Login</Button>
                    </Group>
                </Group>
            </Header>
        }>
            <Center style={{height: '100%'}}>
                <Outlet/>
            </Center>
        </AppShell>
    )
}
