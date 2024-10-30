import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager'

let pm;

test.beforeEach(async ({page}) => {
    pm = new PomManager(page)
})

test.afterEach(async ({page}) => {
    await page.close()
})

test.describe('AddRemove Tests', () => {
    test('Add element', async () => {
        await pm.AddRemovePage.goto()
        let title = await pm.AddRemovePage.getTitle()
        console.log(title)

        await pm.AddRemovePage.addElement()
        await pm.page.pause()
    })
})

test.describe('Hover Tests', () => {
    test('Select title', async () => {
        await pm.HoverPage.goto()
        let title = await pm.HoverPage.getTitle()
        console.log(title)
    })
    
    test('Hover first image', async () => {
        await pm.HoverPage.goto()
        await pm.HoverPage.hover(1)
        expect(pm.HoverPage.caption).toBeVisible()
    
        const caption = await pm.HoverPage.getCaption(1)
        expect(caption).toBe('name: user1')    
    })
})