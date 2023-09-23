import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-3">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-6 py-2 font-extrabold border rounded-md mr-3 border-[#7E90FE] text-[#7E90FE] ">{remote_or_onsite}</button>
        <button className="px-6 py-2 font-extrabold border rounded-md border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
    </div>
    <div className="flex justify-around"> 
        <h2 className="text-xl flex mr-2 items-center"><MdLocationOn></MdLocationOn>{location}</h2>
        <h2 className="text-xl flex mr-2 items-center"><AiOutlineDollar></AiOutlineDollar>{salary}</h2>

    </div>
    <div className="card-actions justify-start">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;