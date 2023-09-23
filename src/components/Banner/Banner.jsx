
const Banner = () => {
    return (
        <div className="bg-[#9873ff26]">
            <div className="max-w-6xl m-auto hero hero-content flex-col lg:flex-row-reverse">
                <img src="./images/user.png" className="w-[616px]" />
                <div>
                    <h1 className="text-7xl font-bold">One Step <br />
                        Closer To Your <br />
                        <span className="text-[#9873FF]">Dream Job</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;