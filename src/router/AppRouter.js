import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { profileIcon } from './../components/images/profile-icon';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from'../components/Dashboard';
import EditProfile from '../components/EditProfile';
import PicView from '../components/PicView';
import Profile from '../components/Profile';

const AppRouter = () => {
    return (
        <Router>
            <Scene key="root" >
                <Scene key="auth" tabs>
                    <Scene key="login" component={Login} title="Login" initial hideTabBar/>
                    <Scene key="signup" component={Signup} title="Signup" hideTabBar/>
                </Scene>
                <Scene key="main" tabs swipeEnabled={false}>
                    <Scene 
                        key="dashboard" 
                        component={Dashboard} 
                        title="Dashboard"
                        initial
                        renderLeftButton={profileIcon}       
                     />
                    <Scene 
                        key="profile" 
                        component={Profile} 
                        title="Profile"
                        renderLeftButton={null}              
                     /> 
                    <Scene key="userProfile" tabs>
                        <Scene 
                            key="editProfile" 
                            component={EditProfile} 
                            title="Profile"
                            hideTabBar
                        />
                        <Scene 
                            key="picView" 
                            component={PicView} 
                            hideTabBar
                            back
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    )
}

export default AppRouter;
