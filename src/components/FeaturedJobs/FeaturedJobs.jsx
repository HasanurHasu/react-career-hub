import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="max-w-6xl m-auto">
            <h1 className="text-4xl text-center font-extrabold">Feature Jobs</h1>
            <p className="font-medium text-center mt-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 my-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center mb-6 ${dataLength === jobs.length && 'hidden'}`}>
                <button
                onClick={() => setDataLength(jobs.length)}
                className="bg-[#9873FF] py-2 px-5 text-lg text-white font-bold rounded">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;