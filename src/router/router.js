import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeLayout from "../components/home/HomeLayout";
import Corpus from "../components/corpus";
import UserInfo from "../components/userInfo/userInfo";

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomeLayout}/>
            <Route path="/y" component={Corpus}/>
            <Route path="/user" component={UserInfo}/>
        </Switch>
    </BrowserRouter>

)

export default BasicRoute;