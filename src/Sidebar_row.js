import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar_row.css'



function Sidebar_row({title, src, Icon}) {
    return (
        <div className="sidebar_row">
            {
                src && <Avatar src={src} />
            }
            {
                Icon && <Icon />
            }
            <h4>{title}</h4>
        </div>
    )
}

export default Sidebar_row
