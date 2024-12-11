'use client'

import { Card, Container, Flex, Text, TextField } from "@radix-ui/themes";
import { KeyboardEvent, useState, ChangeEvent } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([])

  function addNewTodo(newTodo: string) {
    setTodoList(prev => [...prev, newTodo]);
    setTodo("")
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      return addNewTodo(todo)
    }
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value)
  }

  return (
    <Container>
      <Card>
        <Flex direction="column" gap="2">
          <TextField.Root value={todo} onChange={handleOnChange} placeholder="Add a todo" onKeyDown={handleKeyDown}/>
          {todoList.map((value) => {
            return <Text>{value}</Text>
          })}
        </Flex>
      </Card>
    </Container>
  );
}
