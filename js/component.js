class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal-content ">
        <div class="inn animated zoomIn">
            <div class="cancel"><i class="fas fa-times"></i></div>
            <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Services</a></li>  
                <li><a href="reviews.html">Testimonials</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
    <header>
       <div class="container">
        <a href="index.html">
            <div class="logo"><img src="images/logo.png" alt=""></div>
        </a>
        <ul>
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="service.html">Services</a></li>
            <li><a href="reviews.html">Testimonials</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <i class="fas fa-bars"></i>
       </div>
    </header>
        
        `
    }
}

customElements.define("main-header", Header);