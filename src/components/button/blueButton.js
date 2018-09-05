import React, { Component } from 'react'


function BlueButton(props)  {
        return (
            <div>
                <button type="button" class="btn btn btn-outline-primary">{props.button}</button>
            </div>
        )
}

export default BlueButton
