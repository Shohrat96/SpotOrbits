import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent'
import './style/container.css';
import Weather from './Weather';

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

    getCycleDay=(ev)=>{
        let inpValue=ev.target[2].value;
        return inpValue;
    }
    render() {
        return (
            <div className={'container'}>
                <div className={'title'}>
                    <h1>AZERSKY and SPOT6 access corridor with the different acquisition angles</h1>
                </div>
                <div className={'contentWrapper'}>
                    <Sidebar defDate={this.state.date} changeState={this.changeState}/>
                    {/*<Weather/>*/}
                    <Maincontent requiredDate={this.state.date} requiredAngle={this.state.angle} />
                </div>

            </div>
        );
    }
}

export default Container;