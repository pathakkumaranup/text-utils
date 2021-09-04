import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        return word.toLowerCase();
    }
    return (
        <div>
           <div className={`alert alert-${props.alert==null?"warning":capitalize(props.alert.type)} alert-dismissible fade show`} role="alert">
                <strong>{props.alert==null?"":props.alert.type}</strong> : {props.alert==null?"":props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
