// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:9000',
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   }
// });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';  // Ensures React plugin is imported

// export default defineConfig({
//   plugins: [react()],  // Added React plugin for enhanced functionality
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:9000',
//         changeOrigin: true,
//         secure: false,
//         ws: true, // Ensures WebSocket support if needed
//       }
//     }
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/styles/global.scss";` // Ensures global styles are imported
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': '/src'  // Provides cleaner imports for better code management
//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Ensures React plugin is imported
import path from 'path';  // For better path resolution in Vite

export default defineConfig({
  plugins: [react()], // Added React plugin for enhanced functionality
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
        ws: true, // Ensures WebSocket support if needed
      }
    }
  },
  optimizeDeps: {
    exclude: ['pdfjs-dist']  // ✅ Exclude to avoid duplication issues
},
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";` // Ensures global styles are imported
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src', // Provides cleaner imports for better code management
      'pdfjs-dist': 'pdfjs-dist/webpack' // Correctly handles `pdfjs-dist` for Vite
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'pdfjs-dist': ['pdfjs-dist']  // Splits `pdfjs-dist` into a separate chunk for better performance
        }
      }
    }
  }
});
