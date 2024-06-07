import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import theme from "./chakra/theme.ts";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
