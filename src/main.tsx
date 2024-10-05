import { createRoot } from 'react-dom/client'

import App from './app/App.tsx'
import './index.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(<App />)
