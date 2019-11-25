import React from 'react';
import './ControlBar.scss';

function ControlBar(props) {
    return (
        <div className="control-bar">
                    <button className="btn-control prev" onClick={props.handlePrevPage} disabled={props.page === 1 ? "disabled" : null}>
                    </button>
                    <h6> page: {props.page}</h6>
                    <button className="btn-control next" onClick={props.handleNextPage} disabled={props.page === 8 ? "disabled" : null}>
                    </button>
        </div>
    )
}

export default ControlBar
