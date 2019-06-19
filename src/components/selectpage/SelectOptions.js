import React, {Component} from 'react'
import {Grid, Label, Segment, Select} from "semantic-ui-react";
import CheckboxRadioGroup from "./CheckboxRadioGroup";
import Options from "../common/Options";

export default class SelectOptions extends Component {
    state = {
        countries: [
            {key: '1', text: '美国', value: '1'},
            {key: '2', text: '英国', value: '2'},
            {key: '3', text: '德国', value: '3'},
        ],
        methods: [
            {key: '1', text: '旅游', value: '1'},
            {key: '2', text: '美食', value: '2'},
            {key: '3', text: '奇观', value: '3'},
        ]

    }

    render() {
        return (
            <Grid.Column width={4}>
                <CheckboxRadioGroup labels={
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
                </Segment>
            </Grid.Column>
        )
    }
}