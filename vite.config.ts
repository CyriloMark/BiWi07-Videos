import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [tailwindcss()],
    base: "/BiWi07-Videos/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                video: resolve(__dirname, "video.html"),
            },
        },
    },
});
