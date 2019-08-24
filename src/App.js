import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <a className="skip-link screen-reader-text" href="#content">Skip to content</a>

      <header className="masthead">
        <div className="logo">P</div>
        <h2 className="site-title">is for Pierre</h2>
        <img src="./assets/img/buche1.jpg" alt="A man and a woman standing in the water of the Oslo fjord." />
      </header>

      <main id="content" className="main-area">
        <section className="splash grid">
          <div className="splash-content">
            <h2 className="content-title">About Me</h2>
            <div className="splash-text">
              <p>
                <b>“Peter?</b> <i>Peter, are you awake?”</i> With a slight moan I reply, “Now I am.” “Wanna do runescape?” “Sure.” I clambered out of bed and gazed at the clock and realized
                it was 6:00 am. I grabbed my glasses and headed down stairs. We debated about whom would get the upstairs computer and he won. As he brushed past me I noticed
                there was a slight scent of shampoo in his hair. After awhile of playing on the computer we started to get hungry. We decided to make a surprise breakfast for the
                rest of my family. I got out all the ingredients because my brother is at least 6 in. shorter than me. Soon we had scrambled eggs and sausage sizzling in pans. 
                The scent soon arose the rest of the family and we all sat down to breakfast. I made the eggs with a favorite ingredient of mine, sweet curry. Ryan’s chicken 
                sausage was cooked to perfection and the taste was the best part of all. It was a mix of spicy and juicy goodness. We congratulated ourselves and sprinted upstairs.
              </p>
              <p> - Writing sample from 3rd Grade</p>
            </div>
          </div>
        </section>

        <section className="buckets grid">
          <ul>
            <li>
              <img src="./assets/img/potatoes.jpg" alt="Potatoes & Bok Choy" />
              <div className="bucket">
                <h3 className="bucket-title">Party for one?</h3>
                <p>Lebanese Sausage Foam served with Hydroponic Grape Paste</p>
              </div>
            </li>
            <li>
              <img src="./assets/img/buche2.jpg" alt="" />
              <div className="bucket">
                <h3 className="bucket-title">FleX on Xmas</h3>
                <p>Psychoactive Abalone and Veal tossed with Day-old Camembert </p>
              </div>
            </li>
            <li>
              <img src="./assets/img/jazzgasm.jpg" alt="" />
              <div className="bucket">
                <h3 className="bucket-title">Miracles Happen</h3>
                <p>Big Jay McNeely driving the crowd at the Olympic Auditorium into a frenzy, Los Angeles, 1953</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="more grid">
          <div className="more-content">
            <h2 className="content-title">Hot Take of the Week</h2>
            <p>Certain cultures highlight animal and vegetable foods in a raw state. Salads consisting of raw vegetables or fruits are common in many cuisines. Sashimi in Japanese cuisine consists of raw sliced fish or other meat, and sushi often incorporates raw fish or seafood. Steak tartare and salmon tartare are dishes made from diced or ground raw beef or salmon, mixed with various ingredients and served with baguettes, brioche, or...</p>
          </div>
        </section>

        <section className="twins grid">
          <div className="twin">
            <h2 className="content-title">My Philosiphy</h2>
            <p>Nowadays living in a society of being judged by almost everything you do can surely affect one’s morality simply because they don’t won’t be made of a mockery. People would rather do nothing than be the one to do something out of the goodness of their heart, it’s always about the “what do I get if I do this?” instead of “I will expect nothing if I do this”. </p>
          </div>
          <div className="twin">
            <h2 className="content-title">My Values</h2>
            <p>With leaps and bounds as well as stumbles and false-starts, we seek to continually improve ourselves, our projects, our communities, our world. With initiative and experimentation, we iterate our way toward making the world a better place, an excellent place. With curiosity and humility, we learn from our mistakes as well as our successes. We are duty-bound to steward our resources and deliver exceptional products</p>
          </div>
        </section>
      </main>

      <footer className="colophon grid">
        {/* <aside>Content, layout, design: <a href="https://twitter.com/mor10" target="_blank" rel="nofollow">Morten Rand-Hendriksen</a>.</aside> */}
        {/* <aside>All photos: <a href="https://unsplash.com/@andozo" target="_blank" rel="nofollow">Andreas Rønningen</a>.</aside> */}
      </footer>
    </div>
  );
}

export default App;
