import { Button } from "react-bootstrap";
import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";
import HrScroller from "../Components/HrScroller";
import Card from "../Components/Card";
import Item from "../Components/Item";

const Home = () => {
    return (
        <>
            <PageTitle title={"Home"} />
            <section className="banner">
                <div className="main-container p-5 h-100 d-flex justify-content-between align-items-center ">
                    <div className="text-content">
                        <p
                            style={{
                                fontSize: "5vw",
                                lineHeight: "1.3",
                                fontFamily: "Sansation"
                            }}
                        >Innovating<br />
                            Tomorrow, Today
                        </p>
                        <a href="#introduction"><Button variant="dark">Learn More</Button></a>
                    </div>
                    <div className="image-container w-50 flex-shrink-1">
                        <img className="w-100" src="/Home/banner.png" alt="Technology" />
                    </div>
                </div>
            </section>
            <Section ID={"introduction"} header={"Let’s Introduce Ourselves"}>
                <div className="d-flex justfiy-content-center align-items-center h-100 px-3">
                    <div className="image-container w-50">
                        <img className="w-75" src="/logo.png" alt="Logo" />
                    </div>
                    <div className="text-content w-50">
                        <p style={{
                            fontSize: "1.5vw",
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus. Cras accumsan viverra arcu quis posuere. Vestibulum ut ligula nec eros cursus euismod viverra a enim. Phasellus cursus, elit id elementum faucibus, justo felis euismod orci, sit amet aliquam quam augue at quam. Nulla vitae ante venenatis, pellentesque leo vitae, pulvinar lorem. Suspendisse sit amet sem et ligula gravida fermentum nec in nibh. Praesent sed ligula erat.<strong> Founded by IT veterans with a vision to revolutionize socio-technical interactions.</strong></p>
                    </div>
                </div>
            </Section>
            <Section ID={"whatwedo"} header={"What We Do"}>
                <HrScroller>
                    <Card
                        img={"/Home/software.png"}
                        alt={"Software"}
                        header={"Custom Software Development"}
                        icon={"fa-solid fa-grip-vertical"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."} />
                    <Card
                        img={"/Home/ai.png"}
                        alt={"AI"}
                        icon={"fa-solid fa-brain"}
                        header={"AI and Machine Learning Solutions"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    />
                    <Card
                        img={"/Home/iot.png"}
                        alt={"IOT"}
                        icon={"fa-solid fa-wifi"}
                        header={"IoT Integration"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    />
                    <Card
                        img={"/Home/cloud.png"}
                        alt={"ai"}
                        icon={"fa-solid fa-cloud-arrow-up"}
                        header={"Cloud Services"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."}
                    />
                </HrScroller>
                <div className="w-100 d-flex"><a className="mx-auto" href="/whatwedo"><Button variant="dark">Explore Our Services <i className="fa-solid fa-angle-right"></i></Button></a></div>
            </Section>
            <Section header={"Featured Products"} ID={"products"}>
                <div className="d-flex justify-content-center w-100 flex-wrap">
                    <Item
                        img={"/Home/s-t-i.png"}
                        alt={"ai"}
                        header={"Socio-technial Product Name"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."} />
                    <Item
                        img={"/Home/s-t-i.png"}
                        alt={"ai"}
                        header={"Socio-technial Product Name"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."} />
                    <Item
                        img={"/Home/s-t-i.png"}
                        alt={"ai"}
                        header={"Socio-technial Product Name"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero."} />
                </div>
                <div className="w-100 d-flex"><a className="mx-auto" href="/products"><Button variant="dark">View All Products <i className="fa-solid fa-angle-right"></i></Button></a></div>
            </Section>
            <Section header={"Keep yourself Updated"} ID={"newsletter"}>
                <div className="d-flex justify-content-around align-items-center position-relative flex-wrap overflow-hidden h-auto w-100 pb-5">
                    <div className="eclipse position-absolute"></div>
                    <div className="header-content d-flex flex-column justify-content-center"
                        style={{
                            height: "540px"
                        }}>
                        <h2
                            style={{
                                fontSize: "3.1rem",
                                color: "var(--passive-color) !important",
                                textAlign: "left !important"
                            }}>Join our Newsletter</h2>
                        <p style={{
                            color: "var(--passive-color) !important",
                            opacity: 0.5
                        }}>lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="form">
                        <form >
                            <label for="emailid" style={{
                                fontFamily: "Sansation", fontSize: "20px"
                            }}>Enter your email address</label><br />
                            <input
                                required
                                style={{
                                    width: "405px",
                                    height: "65px",
                                    fontSize: "24px",
                                    borderRadius: "10px",
                                    fontFamily: "Sansation"
                                }} id="emailid" type="email" placeholder="example@example.com" className="p-2" /> <br /><br />

                            <Button style={{
                                fontSize: "1.2rem"
                            }} type="submit" variant="dark">Subscribe <i className="fa-solid fa-envelope"></i></Button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Home;