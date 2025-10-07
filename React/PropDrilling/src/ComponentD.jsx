import React, {useContext} from 'react';
import { UserContext } from './ComponentA';


function ComponentD() {

    const user = useContext(UserContext);   

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Goodbye ${user}`}</h2>
        </div>
    )
}
export default ComponentD