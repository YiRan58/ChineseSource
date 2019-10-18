import React, {Component} from 'react';
import {
    Container,
    Header,
    Menu,
} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";
import UserGreeting from "../user";
import Options from "./Options";

class Navbar extends Component {
    state = {
        redirect: false,
        to: "",
        showModal: "",
        isLogin: false
    }

    toHome = () =>
        this.setState({redirect: true, to: "/",t:0})

    toY = () =>
        this.setState({redirect: true, to: "/y",t:1})

    toUser = () => this.setState({redirect: true, to: "/user",t:2})

    isLogin = () => this.setState({isLogin: !this.state.isLogin})

    render() {
        if (this.state.redirect) {
            this.setState({redirect: false})
            return <Redirect push to={this.state.to}/>
        }
        return (
            <Menu
                /*fixed={this.props.fixed}*/
                inverted={true}
                pointing={true}
                size='large'
                style={{
                    marginTop: 0,
                    opacity: .7
                }}
            >
                <Container>
                    <Menu.Item as='a' onClick={this.toHome}>
                        <Header size='medium' inverted={true}
                                image={"https://s1.ljcdn.com/feroot/pc/asset/img/vr/vrlogo.png?_v=20190429154458738"}
                                content={'中文'}>
                        </Header>
                    </Menu.Item>
                    <Menu.Item as='a' onClick={this.toHome}>
                        <Header.Content>首页</Header.Content>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Header.Content>教育中心</Header.Content>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Header.Content>社区</Header.Content>
                    </Menu.Item>
                    <Menu.Item as='a' onClick={() => this.toY}>
                        <Header.Content>语料库</Header.Content>
                    </Menu.Item>
                    <UserGreeting isLogin={Options.getIsLogin()} onClick={() => this.toUser()}
                                  handleClick={() => this.isLogin()}/>
                </Container>
            </Menu>

        )
    }
}

export default Navbar;
