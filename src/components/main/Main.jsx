import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { routes } from '../views/routes';
import Navbar from '../navbar';
import ProfileContainer from '../views/profile/ProfileContainer';
import NotificationContainer from '../common/notification';
import NewsContainer from '../views/news/NewsContainer';
import StoryContainer from '../views/story/StoryContainer';
import './Main.css';

const Main = () => {
    return (
        <div >
            <Navbar />
            <div className="main-body">
                <Switch>
                    <Route path={routes.NEWS} exact component={NewsContainer} />
                    <Route path={routes.PROFILE} component={ProfileContainer} />
                    <Route path={routes.STORY} component={StoryContainer} />
                </Switch>
            </div>
            <NotificationContainer />
        </div>
    )
}

export default Main;
