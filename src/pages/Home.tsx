export default function Home() {
    // the quote is from pg. 215
    return (
        <div>
            <h1> Arthur Witte </h1>
            <h2> About </h2>
            <p> 
                I am a second year Computing Science Student at the University of Alberta. 
                I have contributed frontend web development to two startups (focused on <i>artificial intelligence</i> and <i>ergonomic keyboards</i>, respectively)
                and one neuroscience clinic. 
                I fell in love with programming through <strong>game development</strong>, and my current interests
                are creating <strong>websites</strong>, exploring <strong>operating systems</strong> and learning as much as I can about the field.
            </p>

            <h2> Contact </h2>
            <ul>
                <li><a href="mailto:arthurwitte18@gmail.com">arthurwitte18@gmail.com</a></li>
                <li><a href="https://github.com/ArtDynasty13">GitHub</a></li>
            </ul>

            <blockquote style={{ marginTop: '8rem' }}>
                "Here is the point: we must find, from the outside, a way of describing the Aedificium as it is inside...."
                <cite> — William of Baskerville</cite>
            </blockquote>
        </div>
    );
}