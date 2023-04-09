
const ViewJobData = async ({params}) => {
    const res = await fetch('/jobsData.json');
    const JobsData = await res.json();
    const findJob = JobsData.find(job => job.id == params.jobId)
    return findJob
    
}


export default ViewJobData