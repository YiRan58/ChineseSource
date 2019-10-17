import React, {Component} from 'react'
import Navbar from "./common/navbar";
import {Segment, Tab} from "semantic-ui-react";
import SearchBox from "./common/searchBox";

class Corpus extends Component {


    /**
     *
     * 1 -> 中介语语料
     * 2 -> 汉语教材语料
     * 3 -> 语法项目信息检索
     * 4 -> 文献推荐
     *
     */

    render() {
        const panes = [
            {menuItem: '中介语语料', render: () => <Tab.Pane><SearchBox id={"1"}/></Tab.Pane>},
            {menuItem: '汉语教材语料', render: () => <Tab.Pane><SearchBox id={"2"}/></Tab.Pane>},
            {menuItem: '语法项目信息检索', render: () => <Tab.Pane><SearchBox id={"3"}/></Tab.Pane>},
            {menuItem: '文献推荐', render: () => <Tab.Pane><SearchBox  id={"4"}/></Tab.Pane>},
        ]

        return (
                <Segment
                    textAlign='center'
                    style={{padding: '0em 0em'}}
                    vertical
                >
                    <Navbar />
                    <Tab style={{width:"90%",marginLeft:"5%"}} defaultActiveIndex={this.props.location.active?this.props.location.active:0} panes={panes}/>
                </Segment>
        )
    }
}

export default Corpus
