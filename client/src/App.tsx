
import {Container, Stack} from "@chakra-ui/react";
import Navbar from "./components/navbar.tsx";
import TodoForm from "./components/todoForm.tsx";
import TodoList from "./components/todoList.tsx";

export const BASE_URL = "http://localhost:5000/api";
function App() {
  return (
      <Stack h={"100vh"}>
        <Navbar/>
    <Container maxW={"100vh"}>
      <TodoForm/>
      <TodoList/>
    </Container>
      </Stack>
  )
}

export default App
