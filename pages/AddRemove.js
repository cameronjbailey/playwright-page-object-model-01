import { expect } from '@playwright/test'
import CommonActions from '../utils/CommonActions'  

export default class AddRemovePage {
    // constructor
    constructor(page) {
        this.actions = new CommonActions(page)
    }

    // methods
    async goto() {
        await this.actions.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    }

    async getTitle() {
        return await this.actions.getText('h3')
    }

    async addElement() {
        await this.actions.click('button', { name: 'Add Element'})
    }
}

