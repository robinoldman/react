import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: true,
       isLoggedIn: true, 
    }
  }
  
  
    render() {
        return (
            <div>
        
                <h1>{this.state.isLoaded ? 'Data loaded!' : 'loading....'}</h1>
                    {this.state.isLoggedIn ? (
                        <div>
                            <ol>
                                <li>welcome</li>
                                <li>complete your profile</li>
                            </ol>
                        </div>
                    ) : 
                    (<p>please sign in </p>) }
            </div>
        )
    }
    
}
export default ConditionalRenderingClass