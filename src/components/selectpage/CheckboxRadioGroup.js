import React, {Component} from 'react'
import {Segment, Checkbox, Label, Form} from 'semantic-ui-react'

export default class CheckboxRadioGroup extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <Segment textAlign={"left"}>
                <Label content={"适用水平:"} size={"large"}/> <b>{this.state.value}</b>


                <Form.Field>

                    {this.props.labels.map((item,index) =>
                        <Checkbox
                            key = {index}
                            radio
                            label={item}
                            name='checkboxRadioGroup'
                            value={item}
                            checked={this.state.value === item}
                            onChange={this.handleChange}
                        />
                    )}
                </Form.Field>
            </Segment>
        )
    }
}
