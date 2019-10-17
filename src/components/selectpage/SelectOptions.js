import React, {Component} from 'react'
import {Grid, Segment,Dropdown,Container} from "semantic-ui-react";

export default class SelectOptions extends Component {
    state = {
        optionS : [],
        optionT : [],
        option: {s:"",t:""}

    }


    handleChangeS = (e, { value }) => {
        let opt = this.state.option;
        opt.s =value
        this.setState({option:opt})
        this.stateToParent(opt)
    }
    handleChangeT = (e, { value }) => {
        let opt = this.state.option;
        opt.t =value
        this.setState({option:opt})
        this.stateToParent(opt)
    }

    stateToParent(data){
        this.props.onValue(data)
    }


    handleValue(value){

        if(value === '')
            return false;
        let optionS = []
        let optionT = [];
        value.s.forEach((item)=>{
            optionS.push({key:item.value, text: item.content, value:item.value})
        });
        value.t.forEach((item)=>{
            optionT.push({key:item.value, text: item.content, value:item.value})
        });

        return <Container>
            <Segment textAlign={"left"}>

                <Dropdown
                    placeholder='语义类别'
                    fluid
                    search
                    selection
                    clearable
                    options={optionS}
                    onChange={this.handleChangeS}
                />


            </Segment>

            <Segment textAlign={"left"}>

                <Dropdown
                    placeholder='典型形式'
                    fluid
                    search
                    selection
                    clearable
                    options={optionT}
                    onChange={this.handleChangeT}
                />


            </Segment>
        </Container>

    }

    render() {

        return (
            <Grid.Column width={4}>


                {this.handleValue(this.props.info)}

                <hr/>
                {/*<CheckboxRadioGroup labels={
                    Options.getValues(this.props.option[1])
                }/>
                <Segment textAlign={"left"}>
                    <Label content={"使用国家:"} size={"large"}/><Select compact options={this.state.countries}
                                                                     defaultValue='1'/>
                </Segment>
                <CheckboxRadioGroup labels={
                    Options.getValues(this.props.option[2])
                }/>
                <Segment textAlign={"left"}>
                    <Label content={"话题:"} size={"large"}/><Select compact options={this.state.methods}
                                                                   defaultValue='1'/>
                </Segment>*/}
            </Grid.Column>
        )
    }
}
