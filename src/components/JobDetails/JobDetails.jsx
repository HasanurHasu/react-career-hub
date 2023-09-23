import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id)

    const job = jobs.find(job => job.id === idInt);

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences } = job;

    console.log(job, idInt);
    return (

        <div className="grid grid-cols-3 max-w-7xl m-auto gap-6">
            <div className="col-span-2 border space-y-4 py-4">
                <p><span className="text-black font-bold">Job Description:</span> {job_description}</p>
                <p><span className="text-black font-bold">Job Responsibility:</span> {job_responsibility}</p>
                <p><span className="text-black font-bold">Educational Requirements:</span></p>
                <p>{educational_requirements}</p>
                <p><span className="text-black font-bold">Experiences:</span></p>
                <p>{experiences}</p>
                
            </div>
            <div className="border p-4 bg-[#9873ff26]">
            <h3 className="font-bold">Job Details</h3>
            
            <hr className="w-[2px] border" />
            </div>
        </div>
    );
};

export default JobDetails;