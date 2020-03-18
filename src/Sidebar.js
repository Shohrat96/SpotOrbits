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
                    </select>
                </label>
                <label>Insert the date.
                    <input type='date' name='date' defaultValue={`${props.defDate}`} ></input>
                </label>
                <input id={'submit-btn'} type='submit' placeholder='Submit'></input>
            </form>
        </div>
    );
};

export default Sidebar;