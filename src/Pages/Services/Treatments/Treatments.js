import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Treatments.css'

const Treatments = () => {
    return (
        <div>
            <div className='treatment-img'>
                <img src="/img/IMG_5935.jpg" alt="" />
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
                            <Card.Title>Triple Berry Brightening Facial </Card.Title>
                            <Card.Text>
                            Brighten and rejuvenate the skin with exotic Riberry, Muntries, and Pepper berriesfrom Australia. Packed with antioxidants and anti-inflammatory properties, these super-berries are designed to provide instant brightening and hydration to dry, dehydrated and lackluster skin.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour - $95</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Gentlemen’s Facial</Card.Title>
                            <Card.Text>
                            Using the power of peptides, stem cells and exfoliators, this treatment effectively addresses the skin care concerns of men. Invigorate the skin with an effective exfoliation, extractions, powerful anti-aging ingredients and a hydrating mask. This treatment will revitalize, refresh and improve the health and appearance of men’s skin.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour - $95</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Teen Facial</Card.Title>
                            <Card.Text>
                            Give young skin the support it needs with a facial that is designed to address the hormonal challenges of this age group. This facial includes a deep pore cleanse, an enzyme exfoliation to clarify acneic skin, followed by a soothing green tea mask.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted">1Hour - $65</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Back Facial</Card.Title>
                            <Card.Text>
                            This treatmentconsists of deep cleansing, exfoliation and extractions if necessary. Enjoy this soothing and relaxing treatment which is perfect for anyone with acne or breakouts.(Option to add foot detox)
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 50mins - $75</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Clarifying Facial </Card.Title>
                            <Card.Text>
                            This treatment is designed to effectively remove the keratin buildup to reduce bacteria and acne lesions. Acne is caused by a variety of factors which requires a different approach to therapy based on the individual. Enjoy the stimulating effects of this deep cleansing corrective facial.  The goal of this treatment is to prevent bacterial growth and sanitize pores with ingredients tailored each individual. Finish with an anti-inflammatory green tea mask that will deliver powerful healing antioxidants while simultaneously nourishing and hydrating the skin. The skin will be left feeling invigorated and clear. Managing acne requires teamwork and commitment to see results that can change your complexion, together we can transform your skin to its optimal condition.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 15mins - $105</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Dermaplane Facial  </Card.Title>
                            <Card.Text>
                            Dermaplaning is a skin treatment that uses a specialized ultra thin sterile blade to remove dead skin cells and unwanted facial hair also known as “peach fuzz”. The treatment aims to give facial skin a smooth, youthful and radiant appearance, which also allows for better absorption of skincare products.Not only does it even out the texture of your skin, italso helps make the color appear smoother. It is safe, comfortable and effective for rough/dry skin, fine lines, wrinkles, surface pigmentation and mild acne scarring. Based on your skin type this facial includes cleansing, dermaplaning, mask, serum microcurrent and the option to add a peel based on your skin type.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 10mins - $125</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>Customized Facial </Card.Title>
                            <Card.Text>
                            This isa great suggestion for a first time facial. This customized facial is designed to improve and maintain your skin by determining and addressing its unique needs, and also delivering the necessary building blocks to achieve and promote healthy looking skin. Your customized facial includes an in-depth consultation, skin analysis and daily regimen to achieve your skin goals. This treatment provides a thorough cleansing, gentle exfoliation with enzyme mask, and extractions to remove impurities followed by a relaxing facial massage for complete hydration.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <strong className="text-muted"> 1hour 15mins - $110</strong>
                        </Card.Footer>
                    </Card>
                    <Card className='treatment-service'>
                        <Card.Body>
                            <Card.Title>The Workout </Card.Title>
                            <Card.Text>
                            This facial is a combination of microcurrent, dermaplaning for exfoliation and a firming mask which results in firm, smooth and completely hydrated skin. These results driven skincare products produce results in just one treatment. The firming and tightening mask used in “The Workout” combines some of the latest technology in peptide, antioxidant and dermal regeneration science resulting in microcirculation, detoxification, and instant firming lifting and tightening.
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

export default Treatments;