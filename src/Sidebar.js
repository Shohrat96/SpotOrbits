import React from 'react';
import './style/sidebar.css';

const Sidebar = (props) => {
    return (
        <div className={'sidebar'}>
            <form onSubmit={props.changeState}>
                <label> Insert the angle. Possible values:5, 10, 15, 20
                    <select id="angles" >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </label>
                <label>Insert the date.
                    <input type='date' name='date' defaultValue={`${props.defDate}`} ></input>
                </label>
                <input id={'submit-btn'} type='submit' placeholder='Submit'></input>
            </form>
            <div className={'legend'}>
                <ul className={'legend-list'}>
                    <li className={'legend-list-item'}><span className={'azersky'}></span>AZERSKY</li>
                    <li className={'legend-list-item'}><span className={'spot6'}></span>SPOT6</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;