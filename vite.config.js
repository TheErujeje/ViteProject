import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

// export default defineConfig({
//   // Plugins used in your project (e.g., React, Vue, etc.)
//   plugins: [react()],

//   // Server configuration
//   server: {
//     host: '0.0.0.0', // Your IP address or '0.0.0.0' to listen on all addresses
//     port: 8000, // The port Vite will run on
//     strictPort: true, // If true, Vite will exit if the port is already in use
//     // open: true, // Automatically open the app in the browser on server start
//   },

//   // Build configuration
//   build: {
//     rollupOptions: {
//       input: './index.html', // Entry point for the application
//       output: {
//         dir: 'dist', // Output directory for the build
//         format: 'es', // Output format (can be 'es', 'cjs', 'umd', etc.)
//         sourcemap: true, // Generates sourcemaps for easier debugging
//       },
//     },
//     minify: 'esbuild', // Minifier for JavaScript and CSS (can be 'terser' or 'esbuild')
//     outDir: 'dist', // Output directory for the build
//   },

//   // Optimize dependencies (optional, add specific dependencies here)
//   optimizeDeps: {
//     include: ['react', 'react-dom'], // Dependencies to pre-bundle
//   },
  
//   // CSS configuration (if you're using CSS preprocessors like Tailwind)
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "@/styles/variables.scss";` // Example for SCSS
//       }
//     }
//   },

//   // Define aliases for module resolution (optional)
//   resolve: {
//     alias: {
//       '@': '/src', // Example alias to simplify imports
//     },
//   },
// });



export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8000,
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
