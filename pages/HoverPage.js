import { expect } from '@playwright/test'
import CommonActions from '../utils/CommonActions'

export default class HoverPage {
    constructor(page) {
        this.actions = new CommonActions(page)
        this.caption = page.locator('div.figcaption').first()
    }

    async goto() {
        await this.actions.goto('https://the-internet.herokuapp.com/hovers')
    }

    async getTitle() {
        return await this.actions.getText('h3')
    }

    async hover(index) {
        await this.actions.hover(`div.figure:nth-of-type(${index})`)
    }

    async getCaption(index) {
        return await this.actions.getText(`.figcaption:nth-of-type(${index}) > h5`)
    }
}
