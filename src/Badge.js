import Card from 'react-bootstrap/Card'

function Badge(props) {
    return (
        <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
            <Card.Body>
                <Card.Title>Badge Info</Card.Title>
                <Card.Text>
                    {props.slot}
                </Card.Text>                
                <Card.Text>
                    {props.bonus}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Badge;