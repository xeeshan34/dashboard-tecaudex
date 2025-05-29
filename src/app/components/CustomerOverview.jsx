// import mockdata
import { mockdata } from "../data/products";

const CustomerOverview = () => {
  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500">
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Contact</th>
            <th className="pb-2">Last Interaction</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {mockdata.map(({ name, contact, lastInteraction, status }) => (
            <tr key={name} className="hover:bg-gray-50">
              <td className="py-3 font-medium text-gray-700">{name}</td>
              <td className="py-3 text-gray-600">{contact}</td>
              <td className="py-3 text-gray-600">{lastInteraction}</td>
              <td className="py-3">
                <span
                  className={
                    "inline-flex items-center justify-center h-6 w-24 px-3 text-xs rounded-full font-medium bg-gray-100 text-gray-600"
                  }
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOverview;
