import { Button, Card, Container, Flex, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container>
      <Card>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        </Flex>
      </Card>
    </Container>
  );
}
