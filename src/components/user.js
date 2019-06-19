import React, {Component} from "react";
import {
    Button,
    Menu,
    Header,
    Icon
} from 'semantic-ui-react'
import LoginModal from "./modal";

export default class UserGreeting extends Component {

    render() {
        if (this.props.isLogin) {
            return (
                <Menu.Item position='right' onClick={this.props.onClick}>
                    <Header as='h4' inverted textAlign='center'>
                        <Icon size ={"tiny"} name='user'/>
                        <Header.Content content="抚琴"/>
                    </Header>
                </Menu.Item>
            )
        }
        return (
            <Menu.Item position='right'>
                <LoginModal trigger={<Button as='a' inverted={true} content="登录"/>} type="login" handleClick = {() => this.props.handleClick()}/>
                <LoginModal trigger={<Button as='a' inverted={true} primary={true}
                                             style={{marginLeft: '0.5em'}} content="注册"/>} type="registered"/>
            </Menu.Item>
        )
    }
}