import React from 'react';
import styles from "../CSS/style.module.css";

class Accomplishments extends React.Component {
    render() {
        return(
            <div className={styles.accomplish}>
                <br/><h2>Accomplishments</h2>
                <p>University of Central Florida Dean's List</p>
                <p>National Honors Society</p><br/>
            </div>
        );
    }
}

export default Accomplishments;