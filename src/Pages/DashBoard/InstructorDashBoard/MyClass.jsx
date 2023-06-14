import { Helmet } from "react-helmet-async";


const MyClass = () => {
    return (
        <div>
            <Helmet>
        <title>fluentrix | Add Class</title>
      </Helmet>

      <h2 className="text-center font-bold text-3xl"> My  Class</h2>
            
        </div>
    );
};

export default MyClass;