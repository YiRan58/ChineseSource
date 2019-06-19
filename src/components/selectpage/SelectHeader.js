import React, {Component} from 'react'
import {Container, Icon, Input, Select, Button} from "semantic-ui-react";

export default class SelectHeader extends Component {
    state = {
        options:[
            {key: '1', text: '关键词', value: '1'},
            {key: '2', text: '等级', value: '2'},
            {key: '3', text: '音序', value: '3'},
        ]
    }
    haveSelect() {
        if(this.props.option === true) {
            return <Select compact options={this.state.options} defaultValue='1'/>
        }
        return null
    }

    render() {

            return (
                <Container textAlign={"left"}>
                    <Icon name={"search"}/>
                    <Input size="large" type='text' placeholder='请输入检索项目' action>
                        <input style={{width: "300px"}}/>
                        {this.haveSelect()}
                        <Button type='submit'>搜索</Button>
                    </Input>
                </Container>
            )
        }

}