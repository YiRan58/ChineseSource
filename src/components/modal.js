import React, {Component} from "react";
import {Button, Header, Input, Modal, Form, Segment, Icon} from 'semantic-ui-react'
import Options from "./common/Options";

export default class LoginModal extends Component {
    render() {
        if (this.props.type === "login") {
            return (
                <Modal trigger={this.props.trigger} size={"small"}>
                    <Header as='h2' textAlign='center' content="登录到您的账户"/>
                    <Modal.Content>
                        <Modal.Description>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Field required>
                                        <label>用户名</label>
                                        <Input fluid icon='user' iconPosition='left' placeholder='邮箱'/>
                                    </Form.Field>
                                    <Form.Field required>
                                        <label>输入密码</label>
                                        <Input fluid icon='lock' iconPosition='left' placeholder='输入密码' type='password'>
                                        </Input>
                                    </Form.Field>
                                    <Button fluid size='large' onClick={()=>{
                                        Options.login()
                                        return this.props.handleClick()
                                    }}>
                                        登录
                                    </Button>
                                </Segment>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            )
        }
        return (
            <Modal trigger={this.props.trigger} size={"small"}>
                <Header as='h2' textAlign='center' content="注册"/>
                <Modal.Content>
                    <Modal.Description>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Field required>
                                    <label>用户名</label>
                                    <Input fluid icon='user' iconPosition='left' placeholder='邮箱'/>
                                </Form.Field>
                                <Form.Field required>
                                    <label>验证邮箱</label>
                                    {/*<Input fluid icon='envelope' iconPosition='left' placeholder='输入验证码'>*/}
                                    <Input fluid iconPosition='left' placeholder='输入验证码'>
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
                                    注册
                                </Button>
                            </Segment>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}
