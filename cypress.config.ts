import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'x83arq',
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    }
  }
})