import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";
import ProdCard from "../Components/ProdCard";
import { Button } from "react-bootstrap";

const Product = () => {
    return ( <>
    <PageTitle title={"Products"}/>
        <Section ID={"product_available"} header={"Our Products"}>
            <div className="d-flex flex-wrap justify-content-center align-items-center w-100 px-3 py-3 gap-2">
                <ProdCard header={"Product name"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus."}
                img={"/Products/image.png"}
                link={"/error"}
                />
                <ProdCard header={"Product name"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus."}
                img={"/Products/image.png"}
                link={"/error"}
                />
                <ProdCard header={"Product name"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus."}
                img={"/Products/image.png"}
                link={"/error"}
                />
                <ProdCard header={"Product name"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum, ex a semper auctor, elit tortor consequat lectus, non rhoncus mauris purus eu libero. Nam ante velit, pulvinar non sagittis nec, varius ultricies lacus."}
                img={"/Products/image.png"}
                link={"/error"}
                />
            </div>
            <div className="w-100 d-flex py-5"><a className="mx-auto" href="/error"><Button variant="dark">Request a Demo{" "}<i className="fa-solid fa-gears"></i></Button></a></div>
        </Section>
    </> );
}
 
export default Product;