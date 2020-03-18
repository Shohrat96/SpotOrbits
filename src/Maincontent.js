import React, { Component } from 'react';
import './style/mainContent.css'
const Maincontent = (props) => {
    const angle=props.requiredAngle;
    const startDate=new Date('02/19/2020');
    let requiredDate=props.requiredDate;

    let getCycleDay=()=>{
        let splitRequiredDate=requiredDate.split('-');
        let formatReqDate=splitRequiredDate[1]+'/'+splitRequiredDate[2]+'/'+splitRequiredDate[0];
        let newDate=new Date(`${formatReqDate}`);
        let diffInTime=newDate.getTime()-startDate.getTime();
        let diffInDays=diffInTime/(1000*3600*24);
        let cycleDay=diffInDays%26+1;
        return cycleDay;
    }
    let path='./img/'+angle+'deg'+'/day'+getCycleDay()+'.JPG'
    return (
        <div className={'mainContent'}>
            <img className={'image-item'} src={require(`${path}`)} alt='image'></img>
        </div>
    );
};

export default Maincontent;