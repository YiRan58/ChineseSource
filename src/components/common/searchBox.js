import React, {Component} from 'react'
import {Container, Grid} from 'semantic-ui-react'
import SelectHeader from "../selectpage/SelectHeader";
import SelectBody from "../selectpage/SelectBody";
import SelectOptions from "../selectpage/SelectOptions";
import Data from "../selectpage/data";

class SearchBox extends Component {
    state = {
        info:'',
        option:{},
        pageInfo:undefined
    }

    getChildValue(value) {
        let option = this.state.option;
        option.activeItem = value.activeItem
        this.setState({
            info: value.info,
            option: option
        })
        console.log(option)
    }
    //获取选项的值
    getOptionValue(value) {
        let option = this.state.option;
        option.s=value.s
        option.t=value.t
        this.setState({
            option: option
        })
        console.log(option)
        console.log(this.state.option)
    }

    getPageInfo(value){
        this.setState({
            pageInfo:value
        })
    }

    getBodyInfo(value){
        let option = this.state.option;
        option.current = value;
        this.setState({
            option: option
        })

        this.child.search(option)
    }


    onRef = (ref) => {
        this.child = ref
    }

    render() {


        if (this.props.withoutOption) {
            return (
                <Container fluid >
                    <SelectHeader />
                    <Grid>
                        <SelectBody
                            literature={this.props.literature}
                                    withoutOption={this.props.withoutOption}/>
                    </Grid>
                </Container>
            )
        }
        if(this.props.option[2]==='article'){
            return  <Container fluid>
                <SelectHeader onRef={this.onRef} onValue={this.getPageInfo.bind(this)} filiter={this.state.option}  option={this.props.option[0]}/>
                <Grid >
                    <Data isTrue={false}></Data>
                    <SelectBody onValue={this.getBodyInfo.bind(this)} pageInfo={this.state.pageInfo}/>
                    <SelectOptions onValue={this.getOptionValue.bind(this)} info={this.state.info} option={this.props.option}/>
                </Grid>
            </Container>
        }
        return (
            <Container fluid>
                <SelectHeader onRef={this.onRef} onValue={this.getPageInfo.bind(this)} filiter={this.state.option}  option={this.props.option[0]}/>
                <Grid >
                    <Data isTrue={true} onValue={this.getChildValue.bind(this)}/>
                    <SelectBody onValue={this.getBodyInfo.bind(this)} pageInfo={this.state.pageInfo}/>
                    <SelectOptions onValue={this.getOptionValue.bind(this)} info={this.state.info} option={this.props.option}/>

                </Grid>
            </Container>
        )


    }
}

export default SearchBox


/*

*/
