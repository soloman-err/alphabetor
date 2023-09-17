import Categories from "./categories/Categories";
import Hero from "./hero/Hero";
import Sponsors from "./sponsors/Sponsors";

const Home = () => {
    return (
        <div>
            <Hero />
            <Sponsors />
            <Categories/>
        </div>
    );
};

export default Home;