import React from 'react';

const FirstComponent = ({users}) => {

    const userList = users.map( user => {
        return (
            <div className="user" key={user.id}>
              <div>Name: {user.name}</div>
              <div>Age: {user.age}</div>
              <div>Ocupation: {user.ocupation}</div>
            </div>
          ); 
    })

    return (
        <div className="first-component">
            {userList}
        </div>
    )
    
}
export default FirstComponent;
