import Blog from "./components/Blog";
import Headers from "./components/Header";
import img1 from "./assets/img1_1.jpg";
import img2 from "./assets/img2_1.jpg";
import img3 from "./assets/img3_1.jpg";
import Companies from "./components/Companies";
import Review from "./components/Review";
import Footer from "./components/Footer/Footer";
const App = () => {
  const contents = [
    {
      title: "Safe, Affordable, And Trusted",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img1,
    },
    {
      title: "Enjoy Your Life With Us Now!",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img2,
    },
    {
      title: "Let’s Enjoy Nature With Us",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img3,
    },
  ];
  return (
    <div className="font-Poppins">
      <Headers />
      <Blog content={contents[0]} />
      <Companies />
      <Blog content={contents[1]} alternative={true} />
      <Blog content={contents[2]} />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
