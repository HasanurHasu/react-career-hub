import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import { GrLocation } from 'react-icons/gr';
import { AiOutlineDollar } from 'react-icons/ai';


const Applied = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    console.log(appliedJobs);
    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id))
            setAppliedJobs(jobsApplied);
        }
    }, [])
    return (
        <div className="max-w-6xl m-auto">
            <h1>This is Applied page {appliedJobs.length}</h1>
            <div className="flex flex-col gap-5 my-6">
                {
                    appliedJobs.map(appliedJob => <div key={appliedJob.id}>
                        <div className="flex justify-between items-center border p-5">
                            <div className="flex justify-start gap-5">
                                <div style={{ backgroundColor: '#F4F4F4' }} className="h-40 flex items-center p-4">
                                    <img src={appliedJob.logo} alt="" className="w-40" />
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <h1 className="text-xl font-extrabold text-[#474747]">{appliedJob.job_title}</h1>
                                    <p className="text-[#757575]">{appliedJob.company_name}</p>
                                    <div className='flex gap-4 text-lg'>
                                        <button className='py-2 px-5 border-2 border-[#7E90FE] text-[#7E90FE] rounded font-bold'>{appliedJob.remote_or_onsite}</button>
                                        <button className='py-2 px-5 border-2 border-[#7E90FE] text-[#7E90FE] rounded font-bold'>{appliedJob.job_type}</button>
                                    </div>
                                    <div className='text-lg text-[#757575] flex justify-start gap-8'>
                                        <p className='flex items-center gap-1'><GrLocation /> {appliedJob.location}</p>
                                        <p className='flex items-center gap-1'><AiOutlineDollar /> Salary : {appliedJob.salary}</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="flex justify-center mt-5">
                                    <button className="bg-[#9873FF]  py-2 px-5 text-lg text-white font-bold rounded">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

// https://ibb.co/qjKgqmS
export default Applied;