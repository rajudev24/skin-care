import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Fall = () => {
    return (
        <div>
            <div className='treatment-img'>
                <img src="/img/falls.jpg" alt="" />
            </div>
            <div className='treatments-title'>
                <div className='treatments-details'>
                    <h4>WELCOME TO TREJOR SKIN CARE</h4>
                    <h2>We are a professional & Premium Beauty Skin Care clinic at your twon.</h2>
                    <p>You can drop in for a nourishing treatment or all-day immersion of our latest therapeutic water treatments and results-oriented facial and body treatments.</p>
                </div>
            </div>
            <div className='treatment-section'>
                <Container className='treatment-services'>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>SPICED PUMPKIN MOCHA </Card.Title>
                            <Card.Text>
                                This Facial is packed with antioxidants, detoxifying agents and ingredients that will
                                rejuvenate the skin. The exfoliation properties will satisfy your senses with the sweet
                                aroma of chocolate and will leave your skin glowing. Finished with a Spiced Pumpkin
                                mask that has natural digestive enzymes to remove buildup on the leave a polished
                                glow.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour - $95</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>PUMPKIN WHIPPED FACIAL</Card.Title>
                            <Card.Text>
                                This facial is rich with antioxidants, anti-aging properties and ingredients that will
                                rejuvenate the skin and reduce inflammation. The aroma of pumpkin and spices will
                                leave your senses indulged and delighted throughout the entire facial while your skin
                                is transformed with the stimulation of collagen.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour - $95</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>PUMPKIN PEEL WITH VITAMIN A</Card.Title>
                            <Card.Text>
                                This facial is rich with antioxidants, anti-aging properties and ingredients that will
                                rejuvenate the skin and reduce inflammation. The aroma of pumpkin and spices will
                                leave your senses indulged and delighted throughout the entire facial while your skin
                                is transformed with the stimulation of collagen. Finished with a Vitamin A treatment
                                that will promote cell turnover and increase collagen through fibroblast stimulation.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted">1Hour - $65</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>SMORES INDULGENCE</Card.Title>
                            <Card.Text>
                                Maximize hydration and reduce inflammation with this signature treatment. The
                                sweet cocoa aroma is full of natural antioxidants and is designed for dry, dehydrated
                                skin to nourish, protect and boost healing. Your skin will then be transformed by
                                using the signature Marshmallow Whip Hydrating Mask that is infused with a
                                complex blend of hydrating peptides and botanicals to infuse critical hydration into
                                the skin resulting in overall health and hydration.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 50mins - $75</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>CLARIFYING FACIAL</Card.Title>
                            <Card.Text>
                                Enjoy a treatment that consists of a deep cleansing, exfoliation of the skin and a
                                nourishing mask. Whether you are wanting to work on correcting Acne or
                                congestion, this facial is the perfect detox. It will rejuvenate and cleanse your skin
                                from the inside out.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 15mins - $105</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>OXYGENATING SMORES FACIAL</Card.Title>
                            <Card.Text>
                                This facial starts with our signature Cocoa Enzyme mask, it will indulge your senses
                                with the sweet aroma of chocolate while exfoliating the skin with natural papaya and
                                bromelain. The Oxygen treatment will boost circulation and stimulate cell turnover.
                                Finishing with our Marshmallow mask that will transform the skin, resulting in
                                overall health and hydration.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 10mins - $125</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>RENEWAL FACIAL</Card.Title>
                            <Card.Text>
                                Help the skin recover from the winter with this treatment that is designed to
                                exfoliate gently and effectively using advanced AHA complexes. This facial is finished
                                with infusing the skin with hydrating properties that are meant to heal and soothe
                                botanicals while supporting tissue repair.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 15mins - $110</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>TIME REWIND FACIAL</Card.Title>
                            <Card.Text>
                                Renew and revitalize the skin with potent anti-aging peptides, powerful antioxidants,
                                stem cells and botanicals. The powerful enzyme is going to infuse the skin with
                                multiple forms of Vitamin C to brighten, tighten and exfoliate. The intelligent
                                ingredients of the Firming Peptide paired with the Lactic AHA will simultaneously
                                hydrate and brighten all skin types leaving a firm luminous glow.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 30mins - $180</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>DETOX FACIAL</Card.Title>
                            <Card.Text>
                                Enjoy a treatment that consists of a deep cleansing, exfoliation of the skin and a
                                nourishing mask. Whether you are wanting to work on correcting Acne or clearing
                                up MASKne, the facial will be completed to help rejuvenate, detox and help cleanse
                                your skin from the inside out.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 30mins - $180</strong>
                        </Card.Footer>
                    </Card>


                </Container>
            </div>
        </div>
    );
};

export default Fall;