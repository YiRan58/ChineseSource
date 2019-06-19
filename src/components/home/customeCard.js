import React, {Component} from 'react'
import {Card, Button} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class CustomeCard extends Component {

    render() {
        return (
            <Link to={{pathname:"/y",active:this.props.active} }>
                <Card>
                    {this.props.img}
                    <Card.Content className={"ui  container"}>
                        <Card.Header content={this.props.content}/>
                        <Card.Meta>
                            <br/>
                        </Card.Meta>
                        <Button basic content={"了解更多"}/>
                    </Card.Content>
                </Card>
            </Link>
        )
    }
}

export default CustomeCard