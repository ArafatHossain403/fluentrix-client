import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="">
            <div >
            <img  className="w-1/2 text-center mx-auto my-6"  src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
            </div>
            <div className="text-center">
            <button className="btn btn-accent my-6"><Link to='/'>Back To Home</Link></button>
            
            </div>
            
        </div>
    );
};

export default Error;