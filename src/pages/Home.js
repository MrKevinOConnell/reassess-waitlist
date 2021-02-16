import React from 'react';

import { Image } from 'react-bootstrap';

import Feature from '../components/Feature';
import SocialProof from '../components/SocialProof';

import ft3 from '../assets/ft3.gif';
import me from '../assets/me.jpg';

export default function Home() {
 const ft1 = "https://media.giphy.com/media/3oKIPCg4sXCe4Hqxna/giphy.gif"
 const ft2 = "https://media.giphy.com/media/26n6Wb0bIuuWY0yXK/giphy.gif"
 
 const heroImage = "https://lh3.googleusercontent.com/47G_daeEICHNPlrTKxPjZBHu5uV6uKr70HcCTm_oE0XlCt3RZxi3FPqRYonqRgd_ozSwbodo-jB44uzKwkmEUgtNKJtC2zYzV6CJPVHANSO3psVtxTBKuPH0-wOCGGZxm89V3pJZkElBUj9U-iaPJgjBXYQKXbAQCZP7jlLAq-5AYB6THZcv-LKKjMMwktfa7vFOYg69SJPUhANLlgmhZwWYR99d-ocoGip9jiOYrCtoPJJIaK4giV4IQK5K0tXLLMrcFMOguVJkqnQGF-9Cm4piUHwFn9jRc3Gh_g4hY4HtVC7unmbBp3Dyf38KEAu26Vekoy2M07U9sHtTrmdY1apWiUhZctMsLVycpJRHGNimrZi5HwQEwfTIWwNSToIXyQnCeQA51imI2KdJimU-Ip0KYCtGpevkeyQ98iUrn-c0_xAzv-6PXlYUogPEiWYxXmkB-vS6tQY3pc0EHAXJv92K7_sEYjkHOpgtjqIvfLol_Lz29unr6Ektm9YhvgZEqkoAUqgNM8QwrLWj0gPe-Midab1cLefSqudc6NmPueYvKvVKYU22UaqjdL8iCMA432omkE21CcU_Gn9LeLJ1wA6o7YopLvTjI1_lbxgT71fn52g6tjUKBOdaxIBnsmggekm39f27GnZBAHsx4cZQ0ncFmjU2w5vtiPHsOeiT3e52qTEY10eVEMKz_u93Qw=w600-h1299-no?authuser=0"
    let waitListMembers = 12;

    return (
        <div>
            <div className="hero">
                <h1>The Best Way for YOU to <span className="highlight">Improve</span>.</h1>
                <h2>We connect you with knowledgeable life coaches.</h2>
                <a href="#form"><button id="call-to-action"><b>Join the waitlist!</b></button></a>
                <p>There are currently {waitListMembers} people like you who want to start improving their lives. 🎉</p>
            </div>

            <div className="hero-image">
                <img src={heroImage} width="40%"  />
                
            </div>
<h6 style= {{textAlign: "center"}}> Disclaimer: This isn't an actual conversation, this is just the creator of Reassess (Kevin) talking to himself🤣</h6>

            <section className="details">
                <p>Mental health is a huge issue in today's world, and while therapy does a great job of identifying what your issue is, many times people are left  <span className="highlight"><b>lost</b></span> due to not knowing how to <span className="highlight"><b>solve their issues</b></span>. </p>
                <p>On top of this, therapy tends to be <span className="highlight"><b>too expensive</b></span> for anybody who doesn't have insurance. as prices can be over $150 a session.</p>
                <p>Life coaching takes what therapy is and expands it to  <span className="highlight"><b>look to the future</b></span>. </p>
                <p>We help you<span className="highlight"><b>navigate the in's and out's  </b></span> of your routine to form <span className="highlight"><b>a better life</b></span>.</p>
            </section>
            <section className="features">
                <Feature gif={ft1} title='"What should I say to this guy?' description="This is one of many questions that a life coach can help you with." direction="left" />
                <Feature gif={ft2} title="What if my life coach isn't avaliable?" description="If your life coach isn't online, our AI life coach named Xero can help you out😊" direction="right" />
            </section>

            { <section className="features-list">
                <div>
                    <p>✅  Be connected with a experienced life coach.</p>
                    <p>✅  Get daily suggestions on how you can accomplish your goals.</p>
                    <p>✅  Recieve bi-weekly reports on your progress.</p>
                    <p>✅  Have the worlds best AI (GPT3) at your fingertips.</p>
                </div>
            </section> }


            <section id="form" className="form">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf71mcGxL8YiS3q0fHT0X4v8BhyiYYiDHlAx4h46OOECJDwjw/viewform?embedded=true" width="640" height="1080" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </section>


            <section className="built-by">
                <div style={{ display: "inline-block" }}>
                <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                    <Image src={me} roundedCircle width = "175" height = "175" />
                </div>

                <div style={{ display: "inline-block" }} className="built-by-details">
                    <p>Hi!👋&nbsp;my name's<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Kev0Con"> Kevin</a>, I'm the guy building Reassess! Feel free to <a href="mailto:kevinoconnell42@gmail.com">reach out</a> if you have any questions or concerns.</p>
                </div>
                </div>
            </section>

        </div>
    )
}