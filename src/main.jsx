import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SupabaseProvider } from './context/SupabaseContext'

// Initialize AOS with proper settings
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    console.log('Window loaded, checking for AOS...');
    console.log('AOS available:', !!window.AOS);
    
    if (window.AOS) {
      console.log('Initializing AOS globally...');
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0,
        // Responsive settings
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99
      });
      console.log('AOS initialized successfully globally');
    } else {
      console.error('AOS is not available globally!');
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </StrictMode>,
)
