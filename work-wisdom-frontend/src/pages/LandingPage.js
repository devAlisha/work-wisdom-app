import { Link } from "react-router-dom";
import Button from "../components/Button";
const LandingPage = () => {
  return (
    <div className="flex-auto flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <section className="relative w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Welcome to {""}
                <span className="inline-block">Work Wisdom</span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  A platform to share your work experiences and learn from
                  others.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
                    <Link to="/experiences">
                      <Button text="Read Experiences" />
                    </Link>
                    <Link to="/signup">
                      <Button text="Start your journey" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
