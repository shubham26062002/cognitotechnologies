import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";
import Description from "../Components/Description";


import { Button } from "react-bootstrap";


const WhatWeDo = () => {
    return (<>
        <PageTitle title={"What We Do"} />
        <Section ID={"overview"} header={"Overview"}>
            <div className="d-flex justify-content-center align-items-center gap-2 px-5 py-3">
                <div className="image-content d-flex justify-content-center align-item-center flex-shrink-1 w-50 position-relative">
                    <img className="w-75" src="/WhatWeDo/background.png" alt="background" />
                </div>
                <div className="text-content w-50 flex-shrink-1">
                    <p style={{ fontSize: "1.5vw" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus. Cras accumsan viverra arcu quis posuere. Vestibulum ut ligula nec eros cursus euismod viverra a enim. Phasellus cursus, elit id elementum faucibus, justo felis euismod orci, sit amet aliquam quam augue at quam. Nulla vitae ante venenatis, pellentesque leo vitae, pulvinar lorem. Suspendisse sit amet sem et ligula gravida fermentum nec in nibh. Praesent sed ligula erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus. Cras accumsan viverra.
                    </p>
                </div>
            </div>
        </Section>
        <Section ID={"software-service"} header={"Custom Software Development"}>
            <Description img={"/WhatWeDo/software.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Description", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-pen-to-square", "header": "Examples", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
            ]} />
        </Section>
        
        <Section ID={"ai-service"} header={"AI and Machine Learning Solutions"}>
            <Description imgrev={"reverse"} img={"/WhatWeDo/ai.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Overview", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-hands-holding", "header": "User Cases", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-pen-to-square", "header": "Examples", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
            ]} />
        </Section>
        
        <Section ID={"iot-service"} header={"IoT Integration"}>
            <Description img={"/WhatWeDo/iot.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Explanation", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-hands-holding", "header": "Industry Applications", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-ranking-star", "header": "Success Stories", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
            ]} />
        </Section>
        
        <Section ID={"cloud-service"} header={"Cloud Services"}>
            <Description imgrev={"reverse"} rev={"reverse"} img={"/WhatWeDo/cloud.png"} lists={[
                { "icon": "fa-solid fa-users-viewfinder", "header": "Client Testimonials", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
                { "icon": "fa-solid fa-cloud", "header": "Deployment Options", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus." },
            ]} />
        </Section>

        

        <div className="w-100 d-flex py-5"><a className="mx-auto" href="/error"><Button variant="dark">Get a Free Consultation{" "}<i className="fa-solid fa-user-check"></i></Button></a></div>


    </>);
}

export default WhatWeDo;