import React, {Component} from 'react'
import {Segment, Checkbox, Label, Form} from 'semantic-ui-react'
import Options from "../common/Options";

export default class CheckboxRadioGroup2 extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <Segment textAlign={"left"}>
                <Label content={"文体类型:"} size={"large"}/> <b>{this.state.value}</b>
                <Form.Field>
                    <Checkbox
                        radio
                        label={Options.getValues("article")[1]}
                        name='checkboxRadioGroup'
                        value='记叙文'
                        checked={this.state.value === '记叙文'}
                        onChange={this.handleChange}
                    />
                    <Checkbox
                        radio
                        label='议论文'
                        name='checkboxRadioGroup'
                        value='议论文'
                        checked={this.state.value === '议论文'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='说明文'
                        name='checkboxRadioGroup'
                        value='说明文'
                        checked={this.state.value === '说明文'}
                        onChange={this.handleChange}
                    />
                    <Checkbox
                        radio
                        label='其他'
                        name='checkboxRadioGroup'
                        value='其他'
                        checked={this.state.value === '其他'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
            </Segment>
        )
    }
}
