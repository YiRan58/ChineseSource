import React, {Component} from "react";
import {
    Segment,
    Form,
    Input,
    Button,
    Icon,
    Radio,
    Tab
} from 'semantic-ui-react'
import Navbar from "../common/navbar";

export default class UserInfo extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const panes = [
            {
                menuItem: '信息修改', render: () => <Tab.Pane>
                    <Segment stacked textAlign='left'>
                        <Form size='large'>

                            <Form.Field>
                                <label>昵称</label>
                                <Input fluid icon='user' iconPosition='left' placeholder='昵称'/>
                            </Form.Field>
                            <Form.Group inline>
                                <label>性别</label>
                                <Form.Field
                                    control={Radio}
                                    label='男'
                                    value='1'
                                    checked={this.state.value === '1'}
                                    onChange={this.handleChange}
                                />
                                <Form.Field
                                    control={Radio}
                                    label='女'
                                    value='2'
                                    checked={this.state.value === '2'}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Field>
                                <label>职业</label>
                                <Input fluid icon='home' iconPosition='left' placeholder='职业'/>
                            </Form.Field>
                            <Form.Field>
                                <label>研究领域</label>
                                <Input fluid icon='book' iconPosition='left' placeholder='研究领域'/>
                            </Form.Field>
                            <Form.Field>
                                <label>学校/单位</label>
                                <Input fluid icon='graduation' iconPosition='left' placeholder='学校/单位'/>
                            </Form.Field>

                            <Button fluid size='large'>
                                修改
                            </Button>
                        </Form></Segment>

                </Tab.Pane>
            },
            {
                menuItem: '密码找回', render: () => <Tab.Pane>
                    <Segment stacked textAlign='left'>
                        <Form size='large'>

                            <Form.Field required>
                                <label>用户名</label>
                                <Input fluid icon='user' iconPosition='left' placeholder='邮箱'/>
                            </Form.Field>
                            <Form.Field required>
                                <label>验证邮箱</label>
                                <Input fluid icon='envelope' iconPosition='left' placeholder='输入验证码'>
                                    <Icon name='envelope'/>
                                    <input type="text"/>
                                    <Button content={"发送邮件"}/>
                                </Input>
                            </Form.Field>
                            <Form.Field required>
                                <label>输入密码</label>
                                <Input fluid icon='lock' iconPosition='left' placeholder='输入密码' type='password'>
                                </Input>
                            </Form.Field>
                            <Form.Field required>
                                <label>再次输入密码</label>
                                <Input fluid icon='lock' iconPosition='left' placeholder='输入密码' type='password'>
                                </Input>
                            </Form.Field>
                            <Button fluid size='large'>
                                提交
                            </Button>
                        </Form></Segment>
                </Tab.Pane>
            },
        ]
        return (
            <Segment
                textAlign='center'
                style={{padding: '0em 0em'}}
                vertical
            >
                <Navbar/>
                <Tab style={{width: '60%', marginLeft: "20%"}}
                     defaultActiveIndex={this.props.location.active ? this.props.location.active : 0} panes={panes}/>
            </Segment>
        )
    }
}
