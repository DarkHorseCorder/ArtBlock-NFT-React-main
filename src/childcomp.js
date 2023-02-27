import React, {useState} from 'react';
function ChildComp (props){
    const [childData, setChildData] = useState('this is default')
    
    function handleChildBtn (){
        setChildData('changed btn')
    }
    function handleChangeParentBtn (){
        props.changeParentDatafunc('changed parent')
    }
    return(
        <div>
            <p>{childData}</p>
            <p>{props.passdata}</p>
            <button onClick={handleChildBtn}>Child btn</button>
            <button onClick={handleChangeParentBtn}>Change parent btn</button>
        </div>
    );
}
export default ChildComp;