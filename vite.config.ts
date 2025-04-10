import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // This proxy configuration is crucial for development:
        // 1. It allows the frontend to make requests to "/api/*" paths
        // 2. Vite forwards these requests to the Hono API server running on localhost:3000
        // 3. This prevents CORS issues during local development
        // 4. In production (on Vercel), this proxy isn't needed as API routes are served
        //    from the same domain via serverless functions
        //
        // Without this proxy:
        // - Frontend would need to make cross-origin requests to http://localhost:3000
        // - Would require CORS configuration on the API server
        // - Would need different API URLs for development vs. production
      },
    },
  },
});
