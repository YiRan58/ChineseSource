import React from 'react'
import Navbar from "../common/navbar";
import CustomeCard from "./customeCard";
import {Grid, Image, Visibility, Segment} from 'semantic-ui-react'


const HomeLayout = () => (
    <Visibility
        once={false}
    >
        <Segment

            textAlign='center'
            style={{padding: '0em 0em'}}
            vertical
        >

            <Image fluid  src={require("../../assets/0.jpg")} alt="" style={{position:"absolute"}} />
            <Navbar />
        </Segment>
        <Grid columns='8' style={{ marginTop: "25%"}} >
            <Grid.Row className={"segment"} textAlign='center'>
                <Grid.Column/>
                <Grid.Column/>
                <Grid.Column
                    children={
                        <CustomeCard img={<Image src={require("../../assets/p1.png")} wrapped/>}
                                     content="中介语语料" active={0}/>}
                />
                <Grid.Column
                    children={<CustomeCard img={<Image src={require("../../assets/p2.png")} wrapped/>}
                                           content="汉语教材语料" active={1}/>}
                />
                <Grid.Column
                    children={<CustomeCard img={<Image src={require("../../assets/p3.png")} wrapped/>}
                                           content="语法项目信息检索" active={2}/>}
                />
                <Grid.Column
                    children={<CustomeCard img={<Image src={require("../../assets/p4.png")} wrapped/>}
                                           content="文献推荐" active={3}/>}
                />
                <Grid.Column/>
                <Grid.Column/>
            </Grid.Row>
        </Grid>
    </Visibility>

)

export default HomeLayout