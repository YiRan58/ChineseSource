import React, {Component} from 'react'
import {Container, Menu, Grid} from 'semantic-ui-react'
import axios from 'axios'

export default class Data extends Component {
    state = {
        activeItem: '',
        data: [],
        info: ''
    }
    handleItemClick = (e, {name}) => {
            this.getInfo(name)
    }



    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://47.102.104.94:8080/grammar/list')
            .then(function (response) {

                _this.setState({
                    data: response.data.data,
                    isLoaded: true
                });

            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }

    getInfo(id) {
        const _this = this;
        axios.get('http://47.102.104.94:8080/grammar/info/'+id)
            .then(function (response) {
                _this.setState({
                    info: response.data.data,
                    isLoaded: true
                });
            }).then(function () {
                _this.props.onValue({info:_this.state.info,activeItem:id})
                _this.setState({activeItem: id})
        })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }

    render() {

        if(this.props.isTrue)
            return (
                <Grid.Column width={4}>
                    <Container style={{height:"800px",width:"80%",overflow:"auto"}}>
                    {<Menu vertical>
                        {this.state.data.map(item =>
                            <Menu.Item key={item.grammarPointId}
                            name={item.grammarPointId}
                                       active={this.state.activeItem === item.grammarPointId}
                                       onClick={this.handleItemClick}
                            >
                                {item.grammarPointName}
                            </Menu.Item>
                        )}
                    </Menu>}

                    </Container>
                </Grid.Column>
            )
        else{
                return (
                    <Grid.Column width={4}>
                        <Container style={{height:"800px",width:"80%",overflow:"auto"}}>


                        </Container>
                    </Grid.Column>
                )
        }
    }


}
