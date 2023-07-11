import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
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

export default UserMessage