"use client";
import { Button, Flex, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
