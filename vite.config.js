import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        htmx: resolve(__dirname, 'src/htmx.js'),
        bootstrap: resolve(__dirname, 'src/input.js'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Customize output file names based on entry point
          if (chunkInfo.name === 'htmx') {
            return 'js/htmx.[format].js';
          } else if (chunkInfo.name === 'bootstrap') {
            return 'js/bootstrap.[format].js';
          }
          return 'js/[name].[format].js';
        },
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'css/[name].css'; // Ensure CSS files are output correctly
          }
          return 'assets/[name]'; // For other assets
        },
      },
    },
    outDir: 'ui/static',
    emptyOutDir: false,
  },
});
