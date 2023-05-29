import bg from '../../../assets/home/chef-service.jpg'

const Bistropara = () => {
    return (
        <div className="hero min-h-screen mt-8" style={{ backgroundImage: `url("https://www.chicago.gov/content/dam/city/ofinterest/bus/food/foodservices.mainimage.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md w-full bg-slate-50 text-black">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Bistropara;