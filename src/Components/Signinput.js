import React from 'react';

const Signinput = ({ id, label, inputType, placeholder, value, setValue }) => {
    const changingValue = (e) => {

        // Setting value of each element from here by useState.
        setValue({ ...value, [e.target.id]: e.target.value });
    }
    return (
        <div className="mb-3 row">
            <label htmlFor={id} className="col-sm-2 col-form-label label-log-sign"> {label}</label>
            <div className="col-sm-10">
                <input type={inputType} className="form-control trans-inp-log-sign" id={id} placeholder={placeholder} onChange={changingValue} value={value.id} required minLength={3} />
            </div>
        </div>
    )
}

export default Signinput;