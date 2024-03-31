import Banner from "../Banner/Banner";
import CatagoryList from "../Catagory/CatagoryList";
import FeaturedJobs from "../FearturedJobs/FeaturedJobs";

 
const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
         </div>
    );
};

export default Home;