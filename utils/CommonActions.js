// import { expect } from '@playwright/test'

export default class CommonActions {
    constructor(page) {
        this.page = page;
        //locators
    }

    // common action methods
    async goto(url) {
        await this.page.goto(url)
    }
    
    async click(selector) {
        await this.page.click(selector)
    }

    async fill(selector, text) {
        await this.page.fill(selector, text)
    }

    async hover(selector) {
        await this.page.hover(selector)
    }

    async getText(selector) {
        return await this.page.textContent(selector)
    }
}


