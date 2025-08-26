import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        video: 'on', // 'on', 'off', or 'retain-on-failure',
    }
});