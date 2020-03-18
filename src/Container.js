import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent'
import './style/container.css';

class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            angle:'5',
            date: this.getToday()
        }
        this.changeState=this.changeState.bind(this);
        // this.changeAngle=this.changeAngle.bind(this);

    }
    getToday(){
        let date = new Date();
        return (date.getFullYear().toString().padStart(2, 0))+'-'+(date.getMonth() + 1).toString().padStart(2, 0)+'-'+date.getDate().toString().padStart(2, 0);
    }
    changeState(e){
        e.preventDefault();
        this.setState({date:e.currentTarget[1].value})
        this.setState({angle:e.currentTarget[0].value})

    }
    // changeAngle(e){
    //     this.setState({angle:e.currentTarget.value})
    // }
    getCycleDay=(ev)=>{
        let inpValue=ev.target[2].value;
        console.log(inpValue);
        return inpValue;
    }
    render() {
        console.log(this.state.date);
        return (
            <div className={'container'}>
                <div className={'title'}>
                    <h1>AZERSKY and SPOT6 access corridor with the following acquisition angles: 5, 10, 15, 20</h1>
                </div>
                <div className={'contentWrapper'}>
                    <Sidebar defDate={this.state.date} changeState={this.changeState} /*changeAngle={this.changeAngle}*//>
                    <Maincontent requiredDate={this.state.date} requiredAngle={this.state.angle} />
                </div>

            </div>
        );
    }
}

export default Container;