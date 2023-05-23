import { Avatar, Text, Paper } from "@mantine/core";

export function Opinia({ avatar, opis }) {
    return (
        <Paper radius="md" withBorder p="lg" w={250} h={350}>
            <Avatar src={avatar} size={120} radius={120} mx="auto" />
            <Text ta="center" c="dimmed" fz="sm">
                {opis}
            </Text>
        </Paper>
    );
}
