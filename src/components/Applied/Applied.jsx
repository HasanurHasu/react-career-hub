import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";

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
        <div>
            <h1>This is Applied page</h1>
        </div>
    );
};

// https://ibb.co/qjKgqmS
export default Applied;