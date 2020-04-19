import React from 'react';
import styles from "../CSS/style.module.css";

class Skills extends React.Component {
    render() {
        return(
            <div className={styles.skills}>
                <br/><h2>Skills</h2>
                <ul>
                <li>HTML, CSS</li>
                <li>PHP, MySQL</li>
                <li>Adobe Photoshop, XD, Illustrator</li>
                <li>Node JS, React, React Native</li>
                </ul><br/>
            </div>
        );
    }
}

export default Skills;