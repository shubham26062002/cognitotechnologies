import PageTitle from "../Components/PageTitle";
import Polaroid from "../Components/Polaroid";
import Section from "../Components/Section";
import Item from "../Components/Item";
import MemberCard from "../Components/MemberCard";
import HrScroller from "../Components/HrScroller";
import { Button } from "react-bootstrap";

const WhoWeAre = () => {
    return (<>
        <PageTitle title={"Who We Are"} />
        <Section ID={"history"} header={"Our Story"}>
            <div className="d-flex flex-row-reverse justify-content-center align-items-center gap-2 px-5">
                <div className="image-content d-flex justify-content-center align-items-center flex-shrink-1 w-50 position-relative">
                    <img className="w-75" src="/logo.png" alt="Logo" />
                    <Polaroid img={"/WhoWeAre/founder1.jpg"} alt={"founders"} position={"Founder"} name={"Mr. X"} spcpos={"absolute"} />
                    <Polaroid img={"/WhoWeAre/founder2.png"} alt={"founders"} position={"Co-founder"} name={"Mr. Y"} spcpos={"absolute"} />
                </div>
                <div className="text-content w-50 flex-shrink-1">
                    <p style={{ fontSize: "1.5vw" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus. Cras accumsan viverra arcu quis posuere. Vestibulum ut ligula nec eros cursus euismod viverra a enim. Phasellus cursus, elit id elementum faucibus, justo felis euismod orci, sit amet aliquam quam augue at quam. Nulla vitae ante venenatis, pellentesque leo vitae, pulvinar lorem. Suspendisse sit amet sem et ligula gravida fermentum nec in nibh. Praesent sed ligula erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus. Cras accumsan viverra.
                    </p>
                </div>
            </div>
        </Section>
        <Section ID={"mission-and-vision"} header={"Our Mission & Vision"}>
            <div className="d-flex justify-content-center align-items-center gap-2 p-2 flex-wrap">
                <Item
                    img={"/WhoWeAre/mission.png"}
                    alt={"mission"}
                    header={"Mission"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    hdsize={"24px"}
                />
                <Item
                    img={"/WhoWeAre/vision.png"}
                    alt={"vision"}
                    header={"Vision"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    hdsize={"24px"}
                />
                <Item
                    img={"/WhoWeAre/values.png"}
                    alt={"values"}
                    header={"Values"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    hdsize={"24px"}
                />
            </div>
        </Section>
        <Section ID={"team-members"} header={"Meet the Team"}>
            <HrScroller>
                <MemberCard img={"/WhoWeAre/founder1.jpg"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    contact={[
                        { "iconClass": "fa-brands fa-linkedin", "link": "/error" },
                        { "iconClass": "fa-brands fa-twitter", "link": "/error" },
                    ]}/>
                <MemberCard img={"/WhoWeAre/founder1.jpg"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    contact={[
                        { "iconClass": "fa-brands fa-linkedin", "link": "/error" },
                        { "iconClass": "fa-brands fa-twitter", "link": "/error" },
                    ]}/>
                <MemberCard img={"/WhoWeAre/founder1.jpg"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    contact={[
                        { "iconClass": "fa-brands fa-linkedin", "link": "/error" },
                        { "iconClass": "fa-brands fa-twitter", "link": "/error" },
                    ]}/>
                <MemberCard img={"/WhoWeAre/founder1.jpg"} name={"Mr. A"} position={"UI/UX Developer"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    contact={[
                        { "iconClass": "fa-brands fa-linkedin", "link": "/error" },
                        { "iconClass": "fa-brands fa-twitter", "link": "/error" },
                    ]}/>
            </HrScroller>
            <div className="w-100 d-flex"><a className="mx-auto" href="/error"><Button variant="dark">Join Our Team <i className="fa-solid fa-users-line"></i></Button></a></div>
        </Section>
    </>);
}

export default WhoWeAre;