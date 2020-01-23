import React from "react";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;

        this.firstName = "";
    }

    render() {
        return (
        <p>{this.props.firstName}</p>
        )
    }
}

export default HomePage;