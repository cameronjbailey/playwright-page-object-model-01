import HoverPage from "./HoverPage";
import AddRemovePage from "./AddRemove";

export default class PomManager {
    constructor(page) {
        this.page = page
        this.HoverPage = new HoverPage(page)
        this.AddRemovePage = new AddRemovePage(page)
    }
}