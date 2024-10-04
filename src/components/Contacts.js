function Contacts() {
    return (
            <div>
              <section id="contacts">
                <h1>Contacts</h1>
                <div className="contacts-info">
                  <div className="images">
                    <a href="https://www.facebook.com/Alcantara.r22?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                      <img src="fb.png" alt="Facebook" />
                    </a>
                    <span>RICHIE ALCANTARA</span>
                  </div>
                  <div className="images">
                    <a href="https://www.instagram.com/riiitsiii?igsh=MTk3aDE5Z2xkeGplOA==" target="_blank" rel="noopener noreferrer">
                      <img src="ig.png" alt="Instagram" />
                    </a>
                    <span>@RITSIII</span>
                  </div>
                  <div className="images">
                    <a href="mailto:richiealcantara@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img src="gmail.png" alt="Email" />
                    </a>
                    <span>ritsi0725@gmail.com</span>
                  </div>
                  <div className="images">
                    <a href="tel:09913139041" target="_blank" rel="noopener noreferrer">
                      <img src="call.png" alt="Phone" />
                    </a>
                    <span>09913139041</span>
                  </div>
                </div>
              </section>
              <footer>
                <p>Copyright &copy; 2024 | All Rights Reserved</p>
                <p style={{ color: 'rgba(250, 226, 12, 1)' }}>DEVELOPED BY: RICHIE M. ALCANTARA</p>
              </footer>
            </div>
          );
  }
  
  export default Contacts;