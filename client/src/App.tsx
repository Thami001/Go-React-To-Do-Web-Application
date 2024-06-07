
import {Container, Stack} from "@chakra-ui/react";
import Navbar from "./components/navbar.tsx";
import TodoForm from "./components/todoForm.tsx";
import TodoList from "./components/todoList.tsx";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";
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
