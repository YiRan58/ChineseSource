import React, {Component} from 'react'
import {Container, Grid} from 'semantic-ui-react'
import SelectHeader from "../selectpage/SelectHeader";
import SelectBody from "../selectpage/SelectBody";
import SelectOptions from "../selectpage/SelectOptions";
import Data from "../selectpage/data";

class SearchBox extends Component {
    state = {
        id: '',
        info: '',
        option: {},
        pageInfo: undefined,
        level:undefined
    }


    getChildValue(value) {
        let option = this.state.option;
        option.activeItem = value.activeItem
        option.current = 1
        this.setState({
            info: value.info,
            option: option
        })
        this.childSelect.search(option)
    }

    //获取选项的值
    getOptionValue(value) {
        let option = this.state.option;
        option.s = value.s
        option.t = value.t
        option.current = 1
        this.setState({
            option: option
        })
        this.childSelect.search(option)
    }

    getPageInfo(value) {
        this.setState({
            pageInfo: value
        })
    }

    getBodyInfo(value) {
        let option = this.state.option;
        option.current = value;
        this.setState({
            option: option
        })

        this.childSelect.search(option)
    }


    onRef = (ref) => {
        this.childSelect = ref
        this.setState({
            level: ref.state.level
        })
    }

    setLevel= level=>{
        this.setState({
            level
        })
    }




    render() {

        /**
         *
         * 1 -> 中介语语料
         * 2 -> 汉语教材语料
         * 3 -> 语法项目信息检索
         * 4 -> 文献推荐
         */

        if (this.props.id === "3" || this.props.id === "4")
            return this.return34()

        if (this.props.id === "1")
            return this.return1st()

        return this.return2nd()
    }

    //1 -> 中介语语料
    return1st = () => (
        <Container fluid>
            <SelectHeader onRef={this.onRef} setLevel={this.setLevel} onValue={this.getPageInfo.bind(this)} filiter={this.state.option}
                          id={this.props.id}/>
            <Grid>
                <Data id={this.props.id} level={this.state.level} onValue={this.getChildValue.bind(this)}/>
                <SelectBody id={this.props.id} onValue={this.getBodyInfo.bind(this)} pageInfo={this.state.pageInfo}/>
              {/*  <SelectOptions onValue={this.getOptionValue.bind(this)} info={this.state.info}
                               option={this.props.option}/>*/}
            </Grid>
        </Container>)

    //2 -> 汉语教材语料
    return2nd = () => (
        <Container fluid>
            <SelectHeader onRef={this.onRef} onValue={this.getPageInfo.bind(this)} filiter={this.state.option}
                          id={this.props.id}/>
            <Grid>
                <Data id={this.props.id} onValue={this.getChildValue.bind(this)}/>
                <SelectBody id={this.props.id} onValue={this.getBodyInfo.bind(this)} pageInfo={this.state.pageInfo}/>
                <SelectOptions onValue={this.getOptionValue.bind(this)} info={this.state.info}
                               option={this.props.option}/>

            </Grid>
        </Container>
    )
    return34 = () => (
        <Container fluid>
            {/*<SelectHeader />
                    <Grid>
                        <SelectBody
                            literature={this.props.literature}
                                    withoutOption={this.props.withoutOption}/>
                    </Grid>*/}
        </Container>
    )

}


export default SearchBox


/*

*/
