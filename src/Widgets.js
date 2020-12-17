import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="widget">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWHO&tabs=timeline&width=340&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="1000" 
          scrolling="no" frameborder="0"
          style={{border:"none",overflow:"hidden" }}
           allowfullscreen="true" allow=" encrypted-media; "></iframe>
        </div>
    )
}

export default Widgets
