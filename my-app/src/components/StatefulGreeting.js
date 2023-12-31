import React from "react";

class StatefulGreeting extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
            buttonText: this.state.buttonText === "Enter" ? "Exit" : "Enter",
            
        },
        () => {
          console.log("new state", this.state.introduction);
          console.log("new state", this.state.buttonText);
        }
      );
    }

    increment(){
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>{this.state.count}</button>
            </div>

        )
    }
}

export default StatefulGreeting;