import HoverPage from "./HoverPage";

export default class PomManager {
    constructor(page) {
        this.page = page
        this.HoverPage = new HoverPage(page)
    }
}