class BookPreview extends HTMLElement {
    // Constructor to set up the component
    constructor() {
        super();
        // Attach a shadow DOM to this element, keeping styles and structure encapsulated
        this.attachShadow({ mode: 'open' });
    }

    // This lifecycle method is called when the component is added to the DOM
    connectedCallback() {
        this.render(); // Render the component's HTML and CSS when added to the page
    }

    // Define the attributes that this component will react to
    static get observedAttributes() {
        return ['title', 'author', 'image', 'id'];
    }