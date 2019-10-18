import React, {Component} from 'react'
import {Icon, Input, Select, Button} from "semantic-ui-react";
import axios from 'axios'

export default class SelectHeader extends Component {
    state = {
        id: "",
        level: "1",
        options: [
            {key: '1', text: '关键词', value: '1'},
            {key: '2', text: '等级', value: '2'},
            {key: '3', text: '音序', value: '3'},
        ],
        filiter: undefined,
        data: undefined
    }

    componentDidMount() {
        //通过pros接收父组件传来的方法
        this.props.onRef(this)
    }

    haveSelect() {
        if (this.props.id === "2") {
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
        this.search(this.props.filiter)
    }

    search(value) {
        let that = this
        if (value != null) {
            //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
            if (this.props.id === '2') {
                axios.post('http://47.102.104.94:8080/data/list', {
                    "current": value.current == null ? 1 : value.current,
                    "size": "10",
                    "grammarPointId": value.activeItem,
                    "value": value.s,
                    "example": value.t
                }).then(function (response) {
                    that.setState({
                        data: response.data.data,
                        isLoaded: true
                    });

                }).then(function () {
                    that.props.onValue({pageInfo: that.state.data,})
                }).catch(function (error) {
                    console.log(error);
                    that.setState({
                        isLoaded: false,
                        error: error
                    })
                })
            } else if (this.props.id === '1') {
                this.getMediumData(value)
            }

        }
        return false
    }

    getMediumData(value) {
        let that = this
        axios.post('http://localhost:8080/medium/data', {
            "current": value.current == null ? 1 : value.current,
            "size": "1",
            "level": this.state.level,
            "title": value.activeItem
        }).then(function (response) {
            that.setState({
                data: response.data.data,
                isLoaded: true
            });

        }).then(function () {
            that.props.onValue({pageInfo: that.state.data,})
        }).catch(function (error) {
            console.log(error);
            that.setState({
                isLoaded: false,
                error: error
            })
        })
    }


    handleButtonClick = (level) => {
        this.setState({level: level})
        let that = this
        axios.post('http://localhost:8080/medium/data', {
            "current": 1,
            "size": "1",
            "level": level
        }).then(function (response) {
            that.setState({
                data: response.data.data,
                isLoaded: true
            });

        }).then(function () {
            that.props.onValue({pageInfo: that.state.data,})
        }).catch(function (error) {
            console.log(error);
            that.setState({
                isLoaded: false,
                error: error
            })
        })
        const {setLevel} = this.props;

        setLevel(level);
    }

    render() {

        if (this.props.id === '1') {
            return (
                <div>
                    <Icon name={"search"}/>
                    <Input size="large" type='text' placeholder='请输入检索项目'>
                        <input style={{width: "300px"}}/>
                        {this.haveSelect()}
                        <Button>搜索</Button>
                    </Input>
                    <br/>
                    <Button.Group style={{width: "300px", marginTop: "1%"}}>
                        <Button active={this.state.level === '1'} onClick={() => this.handleButtonClick(1)}>初级</Button>
                        <Button active={this.state.level === '2'} onClick={() => this.handleButtonClick(2)}>中级</Button>
                        <Button active={this.state.level === '3'} onClick={() => this.handleButtonClick(3)}>高级</Button>
                    </Button.Group>
                </div>
            )


        }


        return (
            <div>
            </div>
        )
    }

}
