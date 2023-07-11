// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
    },
  },
  build: {
    base: '/path/to/your/app',
  },
};
