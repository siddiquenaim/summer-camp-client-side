import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ApprovedCard from "./ApprovedCard";
import DeniedCard from "./DeniedCard";
import PendingCard from "./PendingCard";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/all-classes");
    return res.data;
  });

  const approvedClasses = classes.filter(
    (singleClass) => singleClass.status === "Approved"
  );
  const pendingClasses = classes.filter(
    (singleClass) => singleClass.status === "Pending"
  );
  const deniedClasses = classes.filter(
    (singleClass) => singleClass.status === "Denied"
  );

  return (
    <div>
      <h1 className="text-3xl text-center my-10">Manage All Classes</h1>
      <div className="p-10">
        <Tabs>
          <TabList>
            <Tab>Pending Classes</Tab>
            <Tab>Approved Classes</Tab>
            <Tab>Denied Classes</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pendingClasses.map((singlePendingClass) => (
                <PendingCard
                  refetch={refetch}
                  key={singlePendingClass._id}
                  singlePendingClass={singlePendingClass}
                ></PendingCard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {approvedClasses.map((singleApprovedClass) => (
                <ApprovedCard
                  key={singleApprovedClass._id}
                  singleApprovedClass={singleApprovedClass}
                ></ApprovedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {deniedClasses.map((singleDeniedClass) => (
                <DeniedCard
                  key={singleDeniedClass._id}
                  singleDeniedClass={singleDeniedClass}
                ></DeniedCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageClasses;
