import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const port = 3000;
const config = loadEnv("development", "./");

// https://vitejs.dev/config/
export default ({ mode }) =>
	defineConfig({
		base: mode == "production" ? "Learing-Threejs" : "/",
		plugins: [vue()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		server: {
			port: port,
			proxy: {
				"/api/.*": {
					target: config.VITE_BASE_API,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/fallback/, "api"),
				},
			},
		},
	});
