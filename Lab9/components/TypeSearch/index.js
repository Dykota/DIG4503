import React from "react";

class TypeSearch extends React.Component {

    readType(event) {

        event.preventDefault();

        let element = document.querySelector("#type");

        let requestType = element.value;

        if(requestType.length === 0) {
            requestType = "~";
        }

        fetch("/api/pokemon/type/" + requestType)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }
        });

        element.value = "";

    }

    render() {
        return(
            <div>
                 <h2>Type</h2>
                 <form onSubmit={this.readType}>
                    <input id="type" type="text" />
                    <button>Go</button>
                </form>
            </div>
        );
    }

}

export default TypeSearch;