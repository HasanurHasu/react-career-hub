import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from 'react-icons/ai';
import { LiaCalendar } from 'react-icons/lia';
import { PiPhoneLight } from 'react-icons/pi';
import { AiOutlineMail } from 'react-icons/ai';
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id)
    const handleApplyJob= () =>{
        saveJobApplication(idInt)
        console.log('click');
    }

    const job = jobs.find(job => job.id === idInt);

    const { salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, job_title } = job;
    const { phone, email} = contact_information;

    return (

        <div className="grid grid-cols-3 max-w-6xl m-auto gap-6">
            <div className="col-span-2 rounded-lg space-y-4 py-4">
                <p><span className="text-black font-bold">Job Description:</span> {job_description}</p>
                <p><span className="text-black font-bold">Job Responsibility:</span> {job_responsibility}</p>
                <p><span className="text-black font-bold">Educational Requirements:</span></p>
                <p>{educational_requirements}</p>
                <p><span className="text-black font-bold">Experiences:</span></p>
                <p>{experiences}</p>

            </div>
            <div className="rounded-lg p-4 bg-[#9873ff26] text-lg text-[#474747]">
                <h3 className="font-bold">Job Details</h3>
                <hr className="my-4 border-x-[1px] border-[#7E90FE]" />
                <div className="mb-8 space-y-2">
                    <p className='flex items-center gap-1'><AiOutlineDollar className="text-[#9873FF] text-2xl" /><span className="font-bold">Salary :</span> {salary} (Per Month)</p>
                    <p className='flex items-center gap-1'><LiaCalendar className="text-[#9873FF] text-2xl" /><span className="font-bold">Job Title :</span> {job_title}</p>
                </div>

                <h3 className="font-bold">Contact Information</h3>
                <hr className="my-4 border-x-[1px] border-[#7E90FE]" />
                <div className="space-y-2">
                    <p className='flex items-center gap-1'><PiPhoneLight className="text-[#9873FF] text-2xl" /><span className="font-bold">Phone :</span> {phone}</p>
                    <p className='flex items-center gap-1'><AiOutlineMail className="text-[#9873FF] text-2xl" /><span className="font-bold">Email :</span> {email}</p>
                </div>
                <div className="flex justify-center mt-5">
                    <button
                    onClick={handleApplyJob}
                    className="bg-[#9873FF] w-full py-2 px-5 text-lg text-white font-bold rounded">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;