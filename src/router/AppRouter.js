import React from 'react';
import { Dimensions } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import { profileIcon } from './../components/images/profile-icon';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from'../components/Dashboard';
import EditProfile from '../components/EditProfile';
import PicView from '../components/PicView';
import Profile from '../components/Profile';

const AppRouter = () => {
    return (
        <Router>
            <Scene key="root" navigationBarStyle={styles.navBarSpacer}>
                <Scene key="auth" tabs>
                    <Scene key="login" component={Login} title="Login" initial hideTabBar/>
                    <Scene key="signup" component={Signup} title="Signup" hideTabBar/>
                </Scene>
                <Scene key="main" tabs swipeEnabled={false} hideTabBar>
                    <Scene 
                        key="dashboard" 
                        component={Dashboard} 
                        title="Dashboard"
                        initial
                        hideTabBar
                     />
                </Scene>
                <Scene key="userProfile" tabs lazy hideTabBar >
                    <Scene 
                        key="profile" 
                        component={Profile} 
                        title="Profile"
                        renderLeftButton={null} 
                        lazy={false}  
                    /> 
                    <Scene 
                        key="editProfile" 
                        component={EditProfile} 
                        title="Edit Profile"
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
        </Router>
    )
}

const softMenuClearance = Dimensions.get('window').height * .03;

const styles = {
    navBarSpacer: {
        marginTop: softMenuClearance
    }
}

export default AppRouter;
