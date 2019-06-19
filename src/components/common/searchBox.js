import React, {Component} from 'react'
import {Container, Grid} from 'semantic-ui-react'
import SelectHeader from "../selectpage/SelectHeader";
import SelectBody from "../selectpage/SelectBody";
import SelectOptions from "../selectpage/SelectOptions";

class SearchBox extends Component {
    render() {
        if (this.props.withoutOption) {
            return (
                <Container>
                    <SelectHeader/>
                    <Grid>
                        <SelectBody literature={this.props.literature} withoutOption={this.props.withoutOption}/>
                    </Grid>
                </Container>
            )
        }
        return (
            <Container>
                <SelectHeader option={this.props.option[0]}/>
                <Grid>
                    <SelectBody/>
                    <SelectOptions option={
                        this.props.option
                    }/>
                </Grid>
            </Container>
        )


    }
}

export default SearchBox


/*

*/
