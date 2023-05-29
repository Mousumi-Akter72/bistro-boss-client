import Banner from "../Banner/Banner";
import Bistropara from "../Bistropara/Bistropara";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <Bistropara></Bistropara>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;