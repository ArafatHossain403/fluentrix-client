import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div>
      <Carousel>
                <div className="h-1/2">
                    <img  src="https://www.fluentin3months.com/wp-content/uploads/2021/09/free-online-spanish-language-lessons.jpg" />
                    <p className="legend text-3xl font-bold">Learn Spanish with our Best Instructors</p>
                </div>
                <div className="h-1/2">
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-b88768ccbb04a3b48ef17a4746ab38bc" />
                    <p className="legend text-3xl font-bold">Learn German with our Best Instructors</p>
                </div>
                <div className="h-1/2">
                    <img  src="https://ejoy-english.com/blog/wp-content/uploads/2018/10/image.png" />
                    <p className="legend text-3xl font-bold">Learn English with our Best Instructors</p>
                </div>
            </Carousel>
    </div>
  );
};

export default Banner;
