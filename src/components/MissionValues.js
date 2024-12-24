import React from 'react';
import Img1 from '../assets/images/ff.png';

function MissionValues() {
    return (
        <section className="container mt-5 pb-5">
            <h1 className="fw-bold text-center mission-heading">Mission and Values</h1>
            <div className="row border-top border-3 pt-2 pb-4">
                <div className="col-md-6 mb-2">
                    <img src={Img1} className="img-fluid" alt="Mission" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <p className="mission-text">
                        The goal of Fusion Spice is to provide dining experiences that go beyond
                        simple meals and promote wellbeing and a sense of community. Our
                        genuine dedication to sustainability is demonstrated by the local
                        ingredients we source and the ethical food practices we support. Our
                        operations are based on these values, which are deeply rooted in
                        diversity and inclusiveness. They make sure that each visitor and team
                        member is welcomed and treated with respect. Our core values are
                        based on the idea that eating should be a fulfilling event where food and
                        conversation combine to make enduring memories. Our goal is to create
                        a space where people from different backgrounds may gather and
                        interact over delectable food and thought-provoking discussions,
                        feeding the body and the spirit.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MissionValues;
