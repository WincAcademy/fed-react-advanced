import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ChakraProvider } from './components/ui/provider.jsx'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store.js'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </ReduxProvider>
    </StrictMode>
)