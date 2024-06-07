
import {Flex, Spinner, Stack, Text} from "@chakra-ui/react";
import TodoItem from "./todoItem.tsx";
import { useQuery} from "@tanstack/react-query";
import {BASE_URL} from "../App.tsx";


export type Todo = {
    _id: number;
    body: string;
    completed: boolean;
}
const todoList = () => {

    const {data: todos, isLoading} =  useQuery<Todo[]>({
        queryKey: ["todos"],

        queryFn: async () => {
            try {
                const response = await fetch(BASE_URL + "/todos");
                const data = await response.json();

                if(!response.ok){
                    throw new Error(data.message || response.statusText);
                }
                return data || []

            }catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <>
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" my={2} textTransform={"uppercase"}>
                Today's Tasks
            </Text>
            {isLoading && (
                <Flex justifyContent={"center"} my={4}>
                    <Spinner size={"xl"}/>
                </Flex>
            )}
            {!isLoading && todos?.length === 0 && (
                <Stack alignItems={"center"} gap={3}>
                    <Text fontSize={"md"} fontWeight={"bold"} color={"grey.500"}>
                        All Tasks completed
                    </Text>
                    <img src='/Logo.png' alt='logo' width={70} height={70} />
                </Stack>
            )}
            <Stack gap={3}>
                {todos?.map((todo) => (
                    <TodoItem key={todo._id} todo={todo}/>
                ))}
            </Stack>
        </>
    );
};

export default todoList