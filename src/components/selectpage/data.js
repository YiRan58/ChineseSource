import React, {Component} from 'react'
import {Container, Menu, Grid} from 'semantic-ui-react'
import axios from 'axios'

export default class Data extends Component {
    state = {
        id: '',
        activeItem: '',
        data: [],
        info: '',
        level: ''
    }
    handleItemClick = (e, {name}) => {
        if (this.props.id === '2')
            this.getInfo(name)
        else if (this.props.id === '1'){
            this.setState({activeItem: name})
            this.props.onValue({activeItem: name})
        }


    }

    componentDidMount() {
        if (this.props.id === "2") {
            this.getGrammarList()
        } else if (this.props.id === '1') {
            let level = this.props.level == null ? 1 : this.props.level
            this.getTitle(level)
        }

    }



    componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
        if(nextProps.id !== this.props.id){
            this.setState({data:[]})
            if (nextProps.id === "2") {
                this.getGrammarList()
            } else if (nextProps.id === '1') {
               this.getTitle(1)
            }
        }else if (nextProps.id === '1'){
            let level = nextProps.level == null ? 1 : nextProps.level
            this.getTitle(level)
        }
    }


    getGrammarList(){
        const _this = this
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

    getTitle(level){
        const _this = this
        axios.get('http://localhost:8080/medium/title/'+level)
            .then(function (response) {
                _this.setState({
                    data: response.data.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error)
                _this.setState({
                    isLoad: false,
                    error: error
                })
            })
    }



    getInfo(id) {
        const _this = this;
        axios.get('http://47.102.104.94:8080/grammar/info/' + id)
            .then(function (response) {
                _this.setState({
                    info: response.data.data,
                    isLoaded: true
                });
            }).then(function () {
            _this.props.onValue({info: _this.state.info, activeItem: id})
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

        if (this.props.id === "1")
            return (
                <Grid.Column width={4}>
                    <Container style={{height: "750px", overflow: "auto"}}>
                        {<Menu vertical>
                            {this.state.data.map(item =>
                                <Menu.Item key={item}
                                           name={item.toString()}
                                           active={this.state.activeItem === item}
                                           onClick={this.handleItemClick}
                                >
                                    {item}
                                </Menu.Item>
                            )}
                        </Menu>}

                    </Container>
                </Grid.Column>
            )

        if (this.props.id === "2")
            return (
                <Grid.Column width={4}>
                    <Container style={{height: "750px", overflow: "auto"}}>
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
        else {
            return (
                <Grid.Column width={4}>
                    <Container style={{height: "750px", width: "80%", overflow: "auto"}}>


                    </Container>
                </Grid.Column>
            )
        }
    }


}
