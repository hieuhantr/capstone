import img from '../images/logo.png';
import CTAButton from './CTAButton';

function Main() {
    return (
        <main>
            <article>
           <img src="https://www.linkpicture.com/q/hero_6.jpg" alt="Hero image" border="0" />
          <div class="overlay">
           <h1> RESTAURANT WEEK<br/>IS HERE </h1>
           <ol>
           <h2> Book Your Spot </h2>
           <CTAButton theme='light'>Downtown</CTAButton>
           <CTAButton theme='light'>Bishop Ranch</CTAButton>
           <CTAButton theme='light'>Marina</CTAButton>
           </ol>
            </div>
            </article>
            <div id="restaurant-week">
                <img src="https://www.linkpicture.com/q/image-4_34.png" alt="Title: Restaurant Week Menu"/>
                <img src="https://www.linkpicture.com/q/image-5_7.png" alt="Restaurant Week Menu"/>
            </div>
        </main>
    )
}

export default Main;