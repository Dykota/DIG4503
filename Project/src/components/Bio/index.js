import React from 'react';
import styles from "../CSS/style.module.css";

class Bio extends React.Component {
    render() {
        return(
            <div className={styles.bio}>
                <br/><h2>Bio</h2>
                <p>My name is Dykota Baker. I am a Web Design student at the University of Central Florida who is interested in using the web as a medium to express important ideas. Using different products like Microsoft Office, Adobe, and JavaScript to create media is the main activity for my future careers. One side of me wants to be a useful part of an organized workforce that will give me stability and benefits. I put great value in orderly business and information that follows a structured outline. I pay very close attention to detail and often find comfort in putting things into groups where access is easy. Another side of me daydreams about the future often. I have a passion for many different styles of music and interactive design along with written plans of the type of content I could publish that would hopefully be viewed worldwide including short stories, games, and many different genres of music. Most importantly, I am a long thinker. I enjoy digging for the truth through conversation and criticism from multiple sides. My intellectual search for truth has brought me the Christian at a very young age, a faith I haven’t waivered from. I believe that I can use design or music to convey the answers I find in hopes that others will respond to it positively or negatively. If given the proper platform, I believe my views on big social issues we could soon contribute to a better society. While I have little social media presence and have been introverted for as long as I can remember, I do look forward to meaningful and funny discussion with others and have always wanted to be involved in groups. I’m continuing to learn how to express my ideas to large audiences, so one day I will be a more extroverted speaker. Listening to others and engaging in powerful dialogue is of utmost importance to me as it is crucial to fulfilling my larger-scale goals of bettering the world. In order to do that I take steps to become less introverted each day.</p><br/><br/>
            </div>
        );
    }
}

export default Bio;