import React, {Component} from 'react'
import {Grid, Icon, Table, Header, Menu, Segment, Dropdown, Input, Container, List} from "semantic-ui-react";

export default class SelectBody extends Component {
    state = {
        list: [
            {id: 1, text: "你已经在北京呆了二十年了，你当然知道的比我多", from: "来源：这件旗袍比那件漂亮"},
            {id: 2, text: "同时分析比字句谓语项跟比较结果、比较属性、比较差值以及比较点、比较专项之间的关系", from: "来源：这件旗袍比那件漂亮"},
            {id: 3, text: "这个句式是A和B的比较，A比B 怎么样的意思", from: "来源：这件旗袍比那件漂亮"},
            {id: 4, text: "李连杰比姚明矮", from: "来源：这件旗袍比那件漂亮"},
            {id: 5, text: "“不比”只用在不同意对方的说话时才", from: "来源：这件旗袍比那件漂亮"},
        ],
        literature: [
            {id: 1, author: "史欣艳", name: ".现代汉语差比范畴研究述评[J].", from: "牡丹江大学学报", time: ",2019,28(05):17-20"},
            {id: 2, author: "史欣艳", name: ".现代汉语差比范畴研究述评[J].", from: "牡丹江大学学报", time: ",2019,28(05):17-20"},
            {id: 3, author: "史欣艳", name: ".现代汉语差比范畴研究述评[J].", from: "牡丹江大学学报", time: ",2019,28(05):17-20"},
            {id: 4, author: "史欣艳", name: ".现代汉语差比范畴研究述评[J].", from: "牡丹江大学学报", time: ",2019,28(05):17-20"},
        ]
    }

    levelInfo() {
        if (this.props.withoutOption) {
            const stateOptions = [
                {key: 1, text: "现代汉语语法", value: "1"},
                {key: 2, text: "古汉语", value: "2"},
                {key: 3, text: "中华文化", value: "3"},
            ]

            return <Segment textAlign='left' style={{marginTop: "1%"}}>
                <h3>
                    等级信息：HSK-3；HSK-5；HSK-6
                </h3>
                <h3 as='Header' size={"big"} basic style={{marginTop: "1%"}}>
                    教材注释：<Input type='text' placeholder='请输入检索项目' action>
                    <Dropdown placeholder='' search selection options={stateOptions}/>
                </Input>
                </h3>

            </Segment>
        }
        return null
    }

    literature() {
        return <Container>
            <Segment vertical textAlign='left' style={{marginTop: "3%"}}>
                <h1>文献推荐</h1>
            </Segment>
            <Segment vertical textAlign='left' style={{marginTop: "3%"}}>
                <h2>论文类</h2>
                <List>
                    {
                        this.state.literature.map((item, index) =>
                            <List.Item key = {index}><h3>[{index + 1}].{item.author}.{item.name}.{item.from}.{item.time}</h3>
                            </List.Item>
                        )
                    }

                </List>
            </Segment>
            <Segment vertical textAlign='left' style={{marginTop: "3%"}}>
                <h2>专著类</h2>
                <List>
                    {
                        this.state.literature.map((item, index) =>
                            <List.Item key = {index}><h3>[{index + 1}].{item.author}.{item.name}.{item.from}.{item.time}</h3>
                            </List.Item>
                        )
                    }

                </List>
            </Segment>
        </Container>
    }


    render() {
        if (this.props.literature) {
            return this.literature()
        }

        return (
            <Grid.Column width={this.props.withoutOption ? 16 : 12}>
                {this.levelInfo()}
                <Table style={{marginTop: "1%"}}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell><br/></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{this.state.list.map(item =>
                        <Table.Row key={item.id}>
                            <Table.Cell>
                                <Header size='medium'>{item.text}</Header>
                                <Header size='small'>{item.from}</Header>
                            </Table.Cell>
                        </Table.Row>
                    )}</Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left'/>
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right'/>
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Grid.Column>
        )
    }
}