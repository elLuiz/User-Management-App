import React from 'react';
import propType from 'prop-types';

const DataGroup = ({data})=>{
    return (
        data.map((data)=>(
            <div key={data.label} className="data">
                <div className="data-group">
                    <h1 className="label">{data.label}</h1>
                    <p>{data.data}</p>
                </div>
                {data.isEditable && <i className="fas fa-chevron-right"></i>}
            </div>
        ))
            
    )
}

DataGroup.propType = {
    data: propType.array.isRequired
}

export default DataGroup;