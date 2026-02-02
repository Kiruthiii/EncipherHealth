import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="topbar">
          <div className="topleft">
            <a href="#home" className="nav-active">Home</a>
            <a href="#dest">Destination</a>
            <a href="#signaturedishes">Signature Dishes</a>
            <a href="#ourstory">Our Story</a>
          </div>

          <div className="topright">
            <a href="/login" className="login-btn">Login</a>
            <a href="/reservation">
              <button>Book a Table</button>
            </a>
          </div>
        </div>

        <div className="logo">
          <h2>THE FINE DINE</h2>
          <p className="hero-sub">
            A contemporary expression of Indian fine dining
          </p>
        </div>
      </div>
            <div id="dest">
        <div className="section-head">
          <h2>A CULINARY DESTINATION</h2>
          <p className="section-sub">More than a place to dine</p>
        </div>

        <div className="main">
          <div className="content">
            <h3>Where Fine Dining Becomes an Experience</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nestled in the heart of the city, our restaurant is more than a place to dine.
              It is a destination where ambiance, craftsmanship, and flavor come together.
              Every detail — from the lighting to the plating — is curated to create moments
              that linger long after the last course.
            </p>
          </div>

          <div className="img">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_1280.jpg"
              alt="Restaurant interior"
            />
          </div>
        </div>
      </div>
            <div id="signaturedishes">
        <div className="popular">
          <h2>ICONS OF THE KITCHEN</h2>
          <p className="section-sub">Our most celebrated creations</p>
        </div>

        <div className="dishes">
          <div className="dish">
            <img
              src="https://img.freepik.com/premium-photo/plate-food-with-noodles-meat-vegetables_1197144-525.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Murgh Dum Biryani"
            />
            <h3>Murgh Dum Biryani</h3>
            <p>Saffron-kissed basmati rice slow-cooked with tender chicken.</p>
            <a href="#menu">view in menu</a>
          </div>

          <div className="dish">
            <img
              src="https://onestophalal.com/cdn/shop/articles/galouti_kebab-1698210603114_1200x.jpg?v=1698210630"
              alt="Galouti Kebab"
            />
            <h3>Galouti Kebab</h3>
            <p>Melt-in-the-mouth lamb delicacy from Awadhi cuisine.</p>
            <a href="#menu">view in menu</a>
          </div>

          <div className="dish">
            <img
              src="https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2016/01/pepper-delight-fish-curry-with-coconut-milk-1.jpg?w=2036&ssl=1"
              alt="Alappuzha Fish Curry"
            />
            <h3>Alappuzha Fish Curry</h3>
            <p>Coastal fish simmered in a tangy coconut-tamarind gravy.</p>
            <a href="#menu">view in menu</a>
          </div>
        </div>
      </div>

            <div id="menu">
        <div className="menu-wrapper">
          <h2 className="ourmenu">FROM THE KITCHEN</h2>
          <p className="section-sub">Thoughtfully composed</p>

          <div className="category">
            <h3>Starters</h3>
            <p className="category-sub">An introduction to flavour</p>

            <div className="menu-item">
              <div className="menu-head">
                <span className="menu-name">Smoked Paneer Tikka</span>
                <span className="menu-price">₹520</span>
              </div>
              <p className="menu-desc">
                Char-grilled cottage cheese with subtle spice infusion.
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-head">
                <span className="menu-name">Galouti Kebab</span>
                <span className="menu-price">₹680</span>
              </div>
              <p className="menu-desc">
                Awadhi-style lamb kebab with delicate aromatics.
              </p>
            </div>
          </div>

          <div className="category">
            <h3>Main Course</h3>
            <p className="category-sub">Rooted in tradition, refined with care</p>

            <div className="menu-item">
              <div className="menu-head">
                <span className="menu-name">Murgh Dum Biryani</span>
                <span className="menu-price">₹1,150</span>
              </div>
              <p className="menu-desc">
                Saffron-kissed basmati rice slow-cooked with tender chicken.
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-head">
                <span className="menu-name">Alappuzha Fish Curry</span>
                <span className="menu-price">₹980</span>
              </div>
              <p className="menu-desc">
                Coastal fish simmered in a coconut-tamarind gravy.
              </p>
            </div>
          </div>

          <div className="category">
            <h3>Desserts</h3>
            <p className="category-sub">A gentle conclusion</p>

            <div className="menu-item">
              <div className="menu-head">
                <span className="menu-name">Gulkand Panna Cotta</span>
                <span className="menu-price">₹420</span>
              </div>
              <p className="menu-desc">
                Rose-infused dessert with a smooth, silky finish.
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-head">
                <span className="menu-name">Dark Chocolate Samosa</span>
                <span className="menu-price">₹460</span>
              </div>
              <p className="menu-desc">
                Crisp pastry filled with molten chocolate.
              </p>
            </div>
          </div>

          <p className="menu-note">
            Menus are subject to seasonal availability.
          </p>
        </div>
      </div>

            <div id="ourstory">
        <h2>OUR STORY</h2>

        <div className="story">
          <div className="image">
            <img
              src="https://gstatic1.promeai.pro/gallery/publish/2024/08/30/bdfee7a953c6431e802bba1cd549ea63.jpg"
              alt="Restaurant story"
            />
          </div>

          <div className="cont">
            <h3>Heritage & Craft</h3>
            <p className="story-sub">A quiet pursuit of excellence</p>
            <br />

            <p>
              Rooted in the richness of Indian culinary heritage, The Fine Dine
              is a celebration of time-honoured traditions shaped with
              contemporary refinement.
            </p>
            <br />

            <p>
              Every dish is crafted with patience and precision, honouring
              classic techniques while embracing thoughtful modernity.
            </p>
            <br />

            <p>
              Here, flavour is not rushed, and indulgence is measured — creating
              an experience defined by balance, restraint, and quiet excellence.
            </p>
          </div>
        </div>
      </div>



    </>
  );
};

export default Home;
