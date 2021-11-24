import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Winter = () => {
    return (
        <div>
            <div className='treatment-img'>
                <img src="/img/winters.jpg" alt="" />
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
                            <Card.Title>Hot Chocolate—Winter Warming Body Ritual </Card.Title>
                            <Card.Text>
                                Come in from the cold and warm up with Circadia’s Signature Hot Chocolate
                                Body treatment. The Warmth of the wrap will leave you relaxed and ready for
                                your Cocoa and Whip Facial.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour - $95</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Santa’s Little Helper Hand Treatment</Card.Title>
                            <Card.Text>
                                Tired hands from all that wrapping and baking? Treat yourself to a luxurious
                                treatment that will leave your hands ready for the new year.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour - $95</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Hangover Hydration Facial</Card.Title>
                            <Card.Text>
                                When a holiday hangover is causing your complexion to look dull and tired, the
                                combination of Lactic Acid and Marshmallow Whip Hydrating Mask will bring life
                                back into your skin. The Lactic acid will start with exfoliating the surface and
                                deep cleaning the pores. Finishing with the Marshmallow Whip, this mask will
                                hold moisture into the skin, hydrate and soothe from the inside out with tissue
                                hydration. An overall treatment packed with skin benefits and optimal intense
                                healing.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted">1Hour - $65</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Chocolate Covered Berries</Card.Title>
                            <Card.Text>
                                Maximize hydration and reduce inflammation with this signature treatment. The
                                sweet cocoa aroma is full of natural antioxidants and is designed for dry,
                                dehydrated skin to nourish, protect, and boost healing. Your skin will then be
                                transformed by using the signature Marshmallow Whip Hydrating Mask and the
                                Australian Super Berry Antioxidant mask that is infused with a complex blend of
                                hydrating peptides, brightening properties and botanicals to infuse critical
                                hydration into the skin.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 50mins - $75</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>C-Peptide Peel Facial </Card.Title>
                            <Card.Text>
                                Renew and revitalize the skin with potent anti-aging peptides, powerful
                                antioxidants, stem cells and botanicals. The powerful enzyme is going to infuse
                                the skin with multiple forms of Vitamin C to brighten, tighten and exfoliate. The
                                intelligent ingredients of the Firming Peptide paired with the Vitamin A will
                                Stimulate new cell growth, repair and rejuvenate all skin types leaving a firm
                                luminous glow.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 15mins - $105</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Clarifying Detox Facial</Card.Title>
                            <Card.Text>
                                Enjoy a treatment that consists of a deep cleansing, exfoliation of the skin and a
                                nourishing mask. Whether you are wanting to work on correcting Acne or
                                clearing up MASKne, the facial will be completed to help rejuvenate, detox and
                                help cleanse your skin from the inside out.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 10mins - $125</strong>
                        </Card.Footer>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default Winter;