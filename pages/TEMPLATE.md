<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Urban Trends - Your go-to fashion destination for accessories, shoes, bags, and the latest trends.">
    <link rel="icon" type="image/x-icon" href="../../img/logo.svg">

    <!-- CSS -->
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="../../css/pages.css">
    <!-- CSS -->

    <title>Urban Trends</title>
</head>
<body>
    <!-- HEADER -->
    <div class="site-header">
        <a href="../homepage/index.html"><span id="logo"></span></a>
        <a onclick="transition('../fashion_design/index.html')">Fashion News</a>
        <a onclick="transition('../editorial/index.html')">Editorial</a>
        <a onclick="transition('../clothing/index.html')">Clothing</a>
        <a onclick="transition('../shoes_bags/index.html')">Shoes & Bags</a>
        <a onclick="transition('../accessories/index.html')">Accessories</a>
        <a onclick="transition('../styles_fashion_gallery/index.html')">Gallery</a>
        <a onclick="transition('../tips_and_tricks_combinations/index.html')">Style Tips</a>
        <a onclick="transition('../designers_references/index.html')">Designers & References</a>
        <button onclick="hamburger()">☰</button>
    </div>
    <div class="container">
        <div class="hamburger hidden" id="hamburger">
            <a onclick="transition('../fashion_design/index.html')">Fashion News</a>
            <a onclick="transition('../editorial/index.html')">Editorial</a>
            <a onclick="transition('../clothing/index.html')">Clothing</a>
            <a onclick="transition('../shoes_bags/index.html')">Shoes & Bags</a>
            <a onclick="transition('../accessories/index.html')">Accessories</a>
            <a onclick="transition('../styles_fashion_gallery/index.html')">Gallery</a>
            <a onclick="transition('../tips_and_tricks_combinations/index.html')">Style Tips</a>
            <a onclick="transition('../designers_references/index.html')">Designers & References</a>
        </div>
    </div>
    <!-- HEADER -->

    
     <!-- FOOTER -->
    <div class="site-footer">
        <div class="header">
            <h1>URBAN TRENDS</h1>
            <p>by Kevin</p>
            <div class="newsletter">
                <h2>Get the latest fashion trends in your inbox</h2>
                <div class="textbox" placeholder="Email">
                    <input type="text">
                    <h2>Subscribe</h2>
                </div>
            </div>
        </div>
        <div class="essentials">
            <h1>About Us</h1>
            <h1>Email: support@urbantrends.com</h1>
            <h1>Phone: +1 234 567 890</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1> 
        </div>
        <div class="socials">
            <h1>Instagram</h1>
            <h1>Faceboook</h1>
            <h1>Twitter</h1>
            <h1>Pinterest</h1>
            <a onclick="transition('../editorial/index.html')">Editorial</a>
        </div>
        <div class="links">
            <a onclick="transition('../clothing/index.html')">Clothing</a>
            <a onclick="transition('../shoes_bags/index.html')">Shoes & Bags</a>
            <a onclick="transition('../accessories/index.html')">Accessories</a>
        </div>
        <div class="legal_information">
            <h1>© 2025 Urban Trends. All Rights Reserved.</h1>
            <h1>Registered Address: 123 Urban Trends Street, Navotas City</h1>
            <h1>Affiliate Program – Earn commissions by promoting our products.</h1>
        </div>
    </div>
    <!-- FOOTER -->
</body>
<script src="app.js"></script>
<script src="../../css/layout/transition.js"></script>
<script src="../../css/layout/header.js"></script>
</html>