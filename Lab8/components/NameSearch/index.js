import React from "react";

class NameSearch extends React.Component {

    readName(event) {

        event.preventDefault();

        let element = document.querySelector("#name");

        let requestName = element.value;

        if(requestName.length === 0) {
            requestName = "~";
        }

        fetch("/api/pokemon/name/" + requestName)
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
                 <h2>Name</h2>
                 <form onSubmit={this.readName}>
                    <input id="name" type="text" />
                    <button>Go</button>
                </form>
            </div>
        );
    }

}

export default NameSearch;