import React, { useState } from "react"
import { connect } from "react-redux";

// const Home = () => "Home";

function Home({toDos}) { // Home은 props를 가지게 됨
    //console.log(props);
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText("");
    } 
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    );
}

function mapStateToProps (state) {
    //console.log(state, ownProps);
    return { toDos: state };
}

export default connect(mapStateToProps) (Home);
// getCurrentState() function을 사용해서 store로 부터 state를 가져다 줌
// connect()는 Home으로 보내는 props에 추가될 수 있도록 허용함