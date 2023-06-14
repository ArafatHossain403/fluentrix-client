

const AboutCard = ({ about }) => {
    return (
        <div>
            
        <div className="card card-compact w-60 bg-base-100 shadow-xl">
        <figure>
          <img
            src={about.image}
            alt="pic"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{about.header}</h2>
          <p>{about.body}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-link text-amber-700">Read More</button>
          </div>
        </div>
      </div>
      
            
        </div>
    );
};

export default AboutCard;