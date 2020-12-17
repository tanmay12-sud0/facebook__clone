import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
function Header() {
    const [{User}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img  alt="image not found" src="https://www.flaticon.com/svg/static/icons/svg/174/174848.svg" />
                <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search facebook" />
            </div>
            </div>
           
            <div className="header__middle">
            <div className="header__option header__option__active">
                <HomeIcon fontSize="large"  />
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large"  />
            </div>
            <div className="header__option">
                <SubscriptionsIcon fontSize="large"  />
            </div>
            <div className="header__option">
                <StorefrontIcon fontSize="large"  />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large"  />
            </div>

            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={User.photoURL} />
                    <h4>{User.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
