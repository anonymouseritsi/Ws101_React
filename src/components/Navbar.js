function Navbar() {
    return (
    
        <nav>
            <img src="logo.png" alt="Logo" class="logo"/>
            <ul id="menu-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
            <a href="#works"><button class="navigation">Get Started</button></a>
            <img src="menu.png" alt="Menu Icon" class="menu-icon" onclick="toggleMenu()"/>
        </nav>
    );
  }
  
  export default Navbar;