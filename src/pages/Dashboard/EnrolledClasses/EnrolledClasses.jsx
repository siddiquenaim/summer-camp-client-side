import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure
      .get(
        `https://b7a12-summer-camp-server-side-siddiquenaim-siddiquenaim.vercel.app/payments/${user?.email}`
      )
      .then((res) => {
        setPayments(res.data);
      });
  }, []);

  return (
    <div className="mb-20">
      <h3 className="mt-10 text-3xl">All the enrolled classes</h3>
      <div>
        <table className="table my-10 ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th className="text-right">Price</th>
              <th className="text-center">Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((payment, i) => (
              <tr key={payment._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={payment.class.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{payment.class.name}</td>

                <td className="text-right">{payment.class.price}</td>
                <td className="text-center">{payment.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
