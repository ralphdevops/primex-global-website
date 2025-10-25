* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
.navbar {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo h2 {
    color: #2c5530;
    font-weight: 700;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #2c5530;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
    color: white;
    padding: 150px 0 100px;
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
}

.btn-primary {
    background: #ff6b35;
    color: white;
}

.btn-primary:hover {
    background: #e55a2b;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: white;
    color: #2c5530;
}

/* Sections */
section {
    padding: 80px 0;
}

h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c5530;
}

/* About Section */
.about {
    background: #f8f9fa;
}

.about-text {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.about-text p {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    color: #666;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.feature {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature h3 {
    color: #2c5530;
    margin-bottom: 1rem;
}

/* Products Section */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.product-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.product-card h3 {
    color: #2c5530;
    margin-bottom: 1rem;
}

/* Services Section */
.services {
    background: #f8f9fa;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.service-card h3 {
    color: #2c5530;
    margin-bottom: 1rem;
}

/* Contact Section */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-info h3 {
    color: #2c5530;
    margin-bottom: 2rem;
}

.contact-item {
    margin-bottom: 1.5rem;
}

.contact-item strong {
    color: #2c5530;
    display: block;
    margin-bottom: 0.5rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
}

.contact-form button {
    align-self: flex-start;
}

/* Footer */
footer {
    background: #2c5530;
    color: white;
    padding: 50px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #4a7c59;
    color: #ccc;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0,0,0,0.05);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}