import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/AccruPay.tsx',
      name: 'Accru', 
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@stripe/react-stripe-js', '@stripe/stripe-js'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          // '@stripe/react-stripe-js': 'ReactStripeJs',
          // '@stripe/stripe-js': 'StripeJs',
        },
      },
    },
  },
});
