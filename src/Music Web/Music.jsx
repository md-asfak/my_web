import React from 'react'
import ipad from './Image/ipad-iphone.png'
import mac from './Image/mac.png'
import gift from './Image/gift_card.png'



export default function Music() {
  return (
    <>

      <header>
        <nav className="container">
          <div className="logo">
            <h4>myTunes </h4>
          </div>
          <div className="manu_ber">
          <i class="fa-sharp fa-solid fa-bars"></i>
          </div>
          
          <ul>
            <a href="#hero">
              <li>Overview</li>
            </a>

            <a href="#music">
              <li>Music</li>
            </a>

            <a href="#video">
              <li>Video</li>
            </a>

            <a href="#gift">
              <li>Gift Card</li>
            </a>

          </ul>
        </nav>
      </header>

      {/* main section */}

      <main>
        <section className='hero_section' id='hero'>
          <div className="container">
            <h1>myTunes</h1>
            <h3>Your Music, movies, and TV shows take center stage.</h3>
            <p>mytune is the best way to organize and enjoy the music,movies, and TV shows you already have-and shop for the ones ypu want, enjoy the all entertainment myTune has to offer on ypur Mac and Pc.</p>
          </div>
        </section>
      </main>

      {/* music section */}

      <section className='music_section' id='music'>
        <div className="container">
          <h2> <span><i className='fa fa-music'></i></span>Music</h2>
          <h4>45 million Song. Zero ad-free. </h4>

          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eius, accusantium repudiandae eos ullam voluptatibus, earum dicta, tenetur at porro sunt quidem tempore consequuntur mollitia.</h6>
          <button className='primary_btn'>Start Your Trial Now</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quis recusandae vitae.</p>
          <div className="ipad_img">
            <img src={ipad} alt="ipad" />
          </div>
        </div>
      </section>

      {/* about_music */}

      <section className='about_music container'>
        <h3>The movies and TV collection your always wished for. Granted</h3>
        <h6> Whith over 100,000 movies and TV shows to choice from,there's Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, veritatis voluptatem. Animi, id recusandae, saepe perspiciatis quaerat labore dolorem exercitationem eum consequuntur quo molestiae numquam reiciendis a alias quae impedit!</h6>
        <button className='secendary_btn'>Read more</button>
        <div className="mac_img">
          <img src={mac} alt="#" />
        </div>
      </section>

      {/* video section */}

      <section className='video_section' id='video'>
        <div className="container">
          <h3>A world of entertainment. Avalible wherever you are.</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, eum vitae. Facere exercitationem expedita excepturi error suscipit, eligendi dignissimos ad fugiat, similique vero dolor voluptas eaque minus, accusantium maxime illum?</p>
        </div>
      </section>

      {/* gift section  */}

      <section className='gift_section container' id='gift'>
        <div className="gift_card">
          <img src={gift} alt="" />
        </div>
        <div className="gift_content">
          <h3>Gift Card</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic quia autem laboriosam cum inventore nisi ullam, qui, quo quisquam odio! Aliquam quos similique ut tempora deserunt eaque, tenetur numquam!</p>
          <p>Alredy have an orange MyTune Music Gift Card?</p>
          <hr />
          <div>
            <button className='secendary_btn'>Redeem</button>
          </div>
        </div>
      </section>
      {/* 
    footer section */}

      <section className='main_footer'>
        <div className='footer container'>
          <div className="shop">
            <h3>Shop & Learn</h3>

            <div className="shop_link">
              <ul>
                <li>Music</li>
                <li>Movies</li>
                <li>Shows</li>
                <li>Apps</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>


          <div className="shop">
            <h3>Orange Store</h3>

            <div className="shop_link">
              <ul>
                <li>Find & Store</li>
                <li>Today at Orange</li>
                <li>Orange Camp</li>
                <li>Order Status</li>

              </ul>
            </div>
          </div>

          <div className="shop">
            <h3>Education & Business</h3>

            <div className="shop_link">
              <ul>
                <li>Orange & Education</li>
                <li>Shop for Collection</li>
                <li>Orange & Business</li>
                <li>Shop for Business</li>
                <li>Jobs</li>
              </ul>
            </div>
          </div>

          <div className="shop">
            <h3>About Orange</h3>

            <div className="shop_link">
              <ul>
                <li>Newsroom</li>
                <li>Orange Leadership</li>
                <li>Investor</li>
                <li>Contact Orange</li>
                <li></li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      <section className='copyright'>
        <p>Copyright@2023 By Md Ashfakur</p>
      </section>


    </>
  )
}
