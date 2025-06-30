import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../../features/auth/authSlice";

const Home = () => {
  const userToken = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken());
  }, [userToken]);
  return (
    <>
      <div className="homepage">
        <section className="hero-section">
          <div className="header">
            <div>
              <span className="hero-heading">Best of all time</span> see all
              posts here ⟶
            </div>
          </div>
        </section> 
        {/* hero section */}
        <section className="hero">
          <div className="hero-main">
            <div className="hero-main-blog">
              <img
                src="https://s7ap1.scene7.com/is/image/incredibleindia/travel-specialist-bg?qlt=82&ts=1727161688083"
                alt=""
                className="hero-main-img"
              />
            </div>
            <div className="hero-main-text">
              <div>
                <span className="post-date">Apr 29, 2025</span>
                <span className="post-category">Travel</span>
              </div>
              <div>
                <span className="post-quote quote-top">
                  " If you want to understand
                </span>
                <br />
                <span className="post-quote quote-mid">
                  the Universe just look
                </span>
                <br />
                <span className="post-quote quote-bottom">at Nature. "</span>
              </div>
            </div>
          </div>
          <div className="hero-side">
            <div className="hero-side-box">
              <div className="hero-side-box-heading">
                Find your favourite creators here ..!
              </div>
              {!userToken ?
                <div className="hero-side-box-join-btn">
                  <span>
                    <Link to="/register">Join now ⟶</Link>
                  </span>
                </div>:""
              }
            </div>
            <div className="hero-side-box">
              <div className="hero-side-box-img">
                <img
                  src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?cs=srgb&dl=pexels-jessbaileydesign-839443.jpg&fm=jpg"
                  alt=""
                  className="hero-side-image"
                />
              </div>
              <div className="hero-side-box-text">
                <span>
                  <Link to="/blogs">See all posts ⟶</Link>
                </span>
              </div>
            </div>
          </div>
        </section>
     
        {/* features section */}
        <section className="features" id="features">
          <h2>Our Features</h2>
          <div className="feature-list">
            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Feature 1"
              />
              <h3> Personalized Content Curation</h3>
              <p>
                Tailors news and articles based on user preferences and reading
                history, ensuring relevant and engaging content.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                alt="Feature 2"
              />
              <h3>Real-Time Updates</h3>
              <p>
                Delivers the latest news and trends instantly, keeping users
                informed without delay.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt="Feature 3"
              />
              <h3>Multi-Device Synchronization</h3>
              <p>
                Ensures a seamless experience across smartphones, tablets, and
                desktops, allowing users to pick up where they left off.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                alt="Feature 4"
              />
              <h3>Intuitive User Interface</h3>
              <p>
                Features a clean and user-friendly design that simplifies
                navigation and enhances readability.
              </p>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            <div className="testimonial">
              <img
                src="http://res.cloudinary.com/dbbhmh2ji/image/upload/v1747035587/pxjw9pq4n9wuhvz0hrsn.jpg"
                alt="User 1"
                className="testimonial-image"
              />
              <div className="myCarousel">
                <h3>Anjali Yadav</h3>
                <h4>Web Developer</h4>
                <p>
                  "BlogVault has transformed the way I consume news. The
                  personalized content keeps me informed and engaged."
                </p>
              </div>
            </div>

            <div className="testimonial">
              <img
                src="http://res.cloudinary.com/dbbhmh2ji/image/upload/v1747041827/ofn1iyq0njgogbrvxbqh.jpg"
                alt="User 2"
                className="testimonial-image"
              />
              <div className="myCarousel">
                <h3>Rishika Sinha</h3>
                <h4>Traveller</h4>
                <p>
                  "The real-time updates are a game-changer. I never miss out on
                  important trends anymore."
                </p>
              </div>
            </div>

            <div className="testimonial">
              <img
                src="http://res.cloudinary.com/dbbhmh2ji/image/upload/v1748014463/h1mcm00mqohk0chr2tf3.jpg"
                alt="User 3"
                className="testimonial-image"
              />
              <div className="myCarousel">
                <h3>Kritika Yadav</h3>
                <h4>Spiritual Counselor</h4>
                <p>
                  "I love the user-friendly interface. It's intuitive and makes
                  navigation a breeze."
                </p>
              </div>
            </div>
            <div className="testimonial">
              <img
                src="http://res.cloudinary.com/dbbhmh2ji/image/upload/v1747043025/v19puzyv7l04tsl30rls.jpg"
                alt="User 4"
                className="testimonial-image"
              />
              <div className="myCarousel">
                <h3>Harsh Yadav</h3>
                <h4>Food Blogger</h4>
                <p>
                  "I love this application. It is user friendly and makes
                  navigation simple to create intuitive blogs on any topics."
                </p>
              </div>
            </div>
            <div className="testimonial">
              <img
                src="http://res.cloudinary.com/dbbhmh2ji/image/upload/v1748088171/fzqb2ogo3h0dxnombgqa.jpg"
                alt="User 5"
                className="testimonial-image"
              />
              <div className="myCarousel">
                <h3>Khushi Singh</h3>
                <h4>Buzz & Binge Entertainer</h4>
                <p>
                  "I love the user-friendly interface. It's intuitive and makes
                  navigation a breeze and it's also motivate us to create cringe contents."
                </p>
              </div>
            </div>
          </Carousel>
        </section>
      </div>
    </>
  );
};

export default Home;
