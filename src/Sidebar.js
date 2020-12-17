import React from 'react'
import './Sidebar.css'
import Sidebar_row from './Sidebar_row'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{User}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <Sidebar_row title={User.displayName}
            src={User.photoURL}/>

            <Sidebar_row title="COVID-19 Information Center" Icon={LocalHospitalIcon} />
            <Sidebar_row title="Pages" Icon={EmojiFlagsIcon}/>
            <Sidebar_row title="Friends" Icon={PeopleIcon}/>
            <Sidebar_row title="Messanger" Icon={ChatIcon}/>
            <Sidebar_row title="Marketplace" Icon={StoreIcon}/>
            <Sidebar_row title="Videos" Icon={VideoLabelIcon}/>
            <Sidebar_row title="Marketplace" Icon={ExpandMoreIcon}/>
        </div>
    )
}

export default Sidebar
