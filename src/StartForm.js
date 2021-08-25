import * as React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Badge from '../src/Badge'
import './index.css';

let badgesList = [];

function StartForm() {
    const [badgeSlot, setBadgeSlot] = React.useState('');
    const handleBadgeSlotChange = (event) => {
        setBadgeSlot(event.target.value);
    };    
    
    const [bonus, setBonus] = React.useState('');
    const handleBonusChange = (event) => {
        setBonus(event.target.value);
    };
    
    function addBadge() {
        badgesList.push({
            slot: badgeSlot,
            bonus: bonus
        });
    }
    
    return (
        <Container>
            <Row>
                <Form className="mb-6">
                    <Form.Group className="mb-3">
                        <Form.Label>Badge slot</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleBadgeSlotChange} value={badgeSlot}>
                            <option defaultValue={""} disabled hidden></option>
                            <option value="odd">Odd</option>
                            <option value="even">Even</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Bonus</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleBonusChange} value={bonus}>
                            <option value="-">No bonus</option>
                            <option value="hero">Hero</option>
                            <option value="HWA">HWA</option>
                            <option value="sbs">SBS</option>
                            <option value="ipr">IPR</option>
                            <option value="drb">DRB</option>
                            <option value="svd">SVD</option>
                            <option value="lms">LMS</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={addBadge}>
                        Add Badge
                    </Button>
                </Form>
            </Row>
            <Row className="mt-15">
                {badgesList.map((badge, i) =>
                    <Badge key={i} slot={badge.slot} bonus={badge.bonus} />
                )}
            </Row>
        </Container>
    );
}

export default StartForm;