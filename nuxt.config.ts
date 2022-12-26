import { defineNuxtConfig } from 'nuxt'
import istanbul from 'vite-plugin-istanbul'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    build: {
        transpile: ['@heroicons/vue']
    },
	vite: {
		build: {
		  sourcemap: true
		},
		plugins: [
		  istanbul({
			exclude: ['node_modules', 'test/', 'coverage/', 'cypress/'],
			extension: ['.js', '.ts', '.vue'],
			cypress:true
		  })
		]
	  },

    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

        // Cloudinary
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    }
})
