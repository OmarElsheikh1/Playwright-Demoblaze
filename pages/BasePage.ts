// import { Page } from '@playwright/test';

// export class BasePage {
//     protected page: Page;

//     constructor(page: Page) {
//         this.page = page;

//         // Handle all dialogs (alerts, confirms, prompts) globally
//         this.page.on('dialog', async (dialog) => {
//             console.log(`Dialog detected: ${dialog.message()}`);
//             await dialog.accept(); // Automatically accept all dialogs
//         });
//     }
// }