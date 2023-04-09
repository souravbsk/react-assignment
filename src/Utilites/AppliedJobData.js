import { getToCart } from "../Utilites/FakeDb";
const AppliedJobData = async () => {
  const res = await fetch("/jobsData.json");
  const JobData = await res.json();
  const getApplyJobData = await getToCart();
  const storeApplyJob = [];
  for (const applyJobId in getApplyJobData) {
    const addToApply = JobData.find((job) => job.id == applyJobId);
    if (addToApply) {
      storeApplyJob.push(addToApply);
    }
  }
  return [JobData,storeApplyJob];
};
export { AppliedJobData };
