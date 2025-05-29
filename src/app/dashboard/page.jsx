"use client";
import CustomerOverview from "../components/CustomerOverview";
import Header from "../components/Header";
// import { mockdata } from "@/data/products";
import RegionProgressBars from "../components/RegionProgressBars";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />

      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-gray-500 text-sm mt-1">
            Overview of your sales performance and customer interactions.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Sales Performance</h2>
        </div>

        {/* Sales Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm text-black-200 font-light">
              Quarterly Sales
            </h3>
            <p className="text-3xl font-bold mt-2">$250,000</p>
            <p className="text-md text-[#4D7399] mt-1">
              Last Quarter <span className="text-sm text-green-600">+15%</span>
            </p>

            <div className="flex justify-start items-end gap-x-4 mt-4">
              {["Q1", "Q2", "Q3", "Q4"].map((q) => (
                <div key={q} className="flex flex-col items-center">
                  <div className="w-4 h-30 bg-gray-200 border-t-2" />
                  <span className="text-xs text-gray-500 mt-1">{q}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-bold text-black-500">
              Customer Distribution by Region
            </h3>
            <p className="text-3xl font-bold mt-2">1000 Customers</p>
            <p className="text-sm text-[#4D7399] mt-1">
              Current <span className="text-sm text-green-600">+5%</span>
            </p>
            <RegionProgressBars />
          </div>
        </div>

        <div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Customer Overview</h2>
          </div>
          <CustomerOverview />
        </div>
      </div>
    </div>
  );
}
