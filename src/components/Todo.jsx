import { Component } from 'react'
import './style.css'
import Element from './Element';

class Todo extends Component {
    state = {
        elemntID: 0,
        inputValue: '',
        components: []
    };
    render() {
        return (
            <>
                <div className='main-div'>
                    <div className="type-input">
                        <input onChange={this.inputValue} type="text" />
                        <button onClick={this.addfunc} className='btn bg-success add-btn'>Add</button>
                    </div>

                    <div className="to-do-list">{this.state.components}</div>
                </div>
            </>
        );
    }


    inputValue = (e) => {
        this.setState({ inputValue: e.target.value });
    };




    addfunc = () => {
        this.setState(
            (prevState) => ({
                components: [...prevState.components, <Element title={this.state.inputValue} key={prevState.components.length} id={this.state.elemntID} deleteFunc={this.deleteFunc} />, this.state.elemntID],
                elemntID: prevState.elemntID + 1,
            })
        );

    };
    deleteFunc = (e) => {
        console.log(this.state.components.id);
        this.setState(
            (prevState) => ({
                components: prevState.components.filter(component => component.id !== e.target.dataset.id)
            })
        );
    };



}




export default Todo;