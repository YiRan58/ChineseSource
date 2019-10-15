import React, {Component} from 'react'
import {Icon, Input, Select, Button} from "semantic-ui-react";
import axios from 'axios'

export default class SelectHeader extends Component {
    state = {
        options: [
            {key: '1', text: '关键词', value: '1'},
            {key: '2', text: '等级', value: '2'},
            {key: '3', text: '音序', value: '3'},
        ],
        filiter: undefined,
        data: undefined
    }

    componentDidMount(){
        //通过pros接收父组件传来的方法
        this.props.onRef(this)
    }

    haveSelect() {
        if (this.props.option === true) {
            return <Select compact options={this.state.options} defaultValue='1'/>
        }
        return null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filiter: nextProps.filiter
        })
    }

    handleClick = () => {
        console.log(this.props.filiter)
        this.search(this.props.filiter)
    }

    search(value) {
        console.log()
        let that = this
        if (value != null) {
            //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
            axios.post('http://47.102.104.94:8080/data/list', {
                "current": value.current == null ? 1 : value.current,
                "size": "10",
                "grammarPointId": value.activeItem,
                "value": value.s,
                "example": value.t
            })
                .then(function (response) {
                    console.log(response.data.data)
                    that.setState({
                        data: response.data.data,
                        isLoaded: true
                    });

                }).then(function () {
                that.props.onValue({pageInfo: that.state.data,})
            })
                .catch(function (error) {
                    console.log(error);
                    that.setState({
                        isLoaded: false,
                        error: error
                    })
                })
        }
        return false
    }


    render() {

        return (

            <div>
                <Icon name={"search"}/>
                <Input size="large" type='text' placeholder='请输入检索项目'>
                    <input style={{width: "300px"}}/>
                    {this.haveSelect()}
                    <Button onClick={() => {
                        this.handleClick()
                    }}>搜索</Button>
                </Input>
            </div>
            //</Container>
        )
    }

}
