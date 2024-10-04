function Home() {
    return (
        <div className="header" id="home">
            <div className="header-content">
                <h1>WEB DEVELOPER</h1>
                <div className="btn-container">
                    <a href="#about"><button className="btn">Know More</button></a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src="bg.png" alt="User Image" className="user-img"/>
        </div>
    );
  }
  
  export default Home;