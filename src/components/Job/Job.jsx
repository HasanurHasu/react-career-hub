import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="">
                <div className="border rounded-lg space-y-3 p-8">
                    <img src={logo} alt="" className='w-40' />
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className='flex gap-4'>
                        <button className='py-2 px-5 border-2 border-[#7E90FE] text-[#7E90FE] rounded font-bold'>{remote_or_onsite}</button>
                        <button className='py-2 px-5 border-2 border-[#7E90FE] text-[#7E90FE] rounded font-bold'>{job_type}</button>
                    </div>
                    <div className='text-xl flex justify-start gap-8'>
                        <p className='flex items-center gap-1'><GrLocation /> {location}</p>
                        <p className='flex items-center gap-1'><AiOutlineDollar /> Salary : {salary}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`job/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
};

export default Job;