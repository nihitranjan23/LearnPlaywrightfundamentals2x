import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({ button: 'right' });


    const rawOptions: string[] = await page
        .locator('ul.context-menu-list span')
        .allTextContents();

    // Remove keyboard shortcut symbols (⌘, ⌫, etc.)
    const allOptions: string[] = rawOptions.map(text =>
        text.replace(/[⌘⌫⇧⌥⎋⏎⇥]/g, '').trim()
    );

    console.log(allOptions);

    await page.getByText('Copy', { exact: true }).first().click();


});