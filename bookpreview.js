class BookPreview extends HTMLElement {
    // Constructor to set up the component
    constructor() {
        super();
        // Attach a shadow DOM to this element, keeping styles and structure encapsulated
        this.attachShadow({ mode: 'open' });
    }