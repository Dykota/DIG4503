import React from "react";

class IdSearch extends React.Component {

    readId(event) {

        event.preventDefault();

        let element = document.querySelector("#id");

        let requestName = element.value;

        if(requestName.length === 0) {
            requestName = "~";
        }

        fetch("/api/pokemon/id/" + requestName)
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

        
    }

    render() {
        return(
            <div>
                 <h2>ID</h2>
                 <form onSubmit={this.readId}>
                    <input id="id" type="number" />
                    <button>Go</button>
                </form>
            </div>
        );
    }

}

export default IdSearch;