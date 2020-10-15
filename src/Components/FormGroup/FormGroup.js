import React from 'react';
import propTypes from 'prop-types';

import '../../styles/Components/Form/form.css';

const FormGroup =({children})=> {
    return (
        <form className="form-group" autoComplete="off">
            {children}

        </form>
    )
}

FormGroup.propTypes = {
    children: propTypes.node.isRequired
}

export default FormGroup;