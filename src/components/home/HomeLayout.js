import React from 'react'
import Navbar from "../common/navbar";
import CustomeCard from "./customeCard";
import {Grid, Image, Visibility, Segment,Container} from 'semantic-ui-react'
import Carousel from 'rmc-m-carousel';

const HomeLayout = () => {

    return <Visibility
        once={false}
    >

        <Segment


            style={{padding: '0em 0em'}}
            vertical
        >


            <Navbar fixed={true}/>
        </Segment>


        {/**/}



    <Grid style={{marginTop: ""}}>
        <Grid.Row textAlign='center'>

            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={8}>
                <Container>
                    <Carousel style={{height:"30%"}}>
                        <a target="_blank" rel="nofollow me noopener noreferrer" >
                            <img src={require("../../assets/640.jpg")} alt="" style={{width:"100%",height:"300px"}}/>
                        </a>
                        <a target="_blank" rel="nofollow me noopener noreferrer" >
                            <img src={require("../../assets/641.jpg")} alt="" style={{width:"100%",height:"300px"}}/>
                        </a>
                        <a target="_blank" rel="nofollow me noopener noreferrer" >
                            <img src={require("../../assets/642.jpg")} alt="" style={{width:"100%",height:"300px"}}/>
                        </a>
                        <a target="_blank" rel="nofollow me noopener noreferrer" >
                            <img src={require("../../assets/643.jpg")} alt="" style={{width:"100%",height:"300px"}}/>
                        </a>
                    </Carousel>
                </Container>
            </Grid.Column>
            <Grid.Column width={4}>
            </Grid.Column>
        </Grid.Row>
    </Grid>

        <Grid columns='8' style={{marginTop: "5%"}}>


            <Grid.Row className={"segment"} textAlign='center'>
                <Grid.Column/>
                <Grid.Column/>
                <Grid.Column
                    children={
                        <CustomeCard img={<Image src={require("../../assets/01.jpg")} style={{height: "200px"}} />}
                                     content="中介语语料" active={0}/>}
                />
                <Grid.Column
                    children={<CustomeCard
                        img={<Image src={require("../../assets/02.jpg")} style={{height: "200px"}} />}
                        content="汉语教材语料" active={1}/>}
                />
                <Grid.Column
                    children={<CustomeCard
                        img={<Image src={require("../../assets/03.jpg")} style={{height: "200px"}} />}
                        content="语法项目信息检索" active={2}/>}
                />
                <Grid.Column
                    children={<CustomeCard
                        img={<Image src={require("../../assets/04.jpg")} style={{height: "200px"}} />}
                        content="文献推荐" active={3}/>}
                />
                <Grid.Column/>
                <Grid.Column/>
            </Grid.Row>
        </Grid>
    </Visibility>

}

export default HomeLayout
