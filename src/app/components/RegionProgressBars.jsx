import { mockdata } from "../data/products";

const RegionProgressBars = () => {
  // Aggregate total sales per region
  const regionTotals = mockdata.reduce((acc, user) => {
    const totalSales = user.salesPerMonth.reduce((sum, s) => sum + s.sales, 0);
    acc[user.region] = (acc[user.region] || 0) + totalSales;
    return acc;
  }, {});

  const maxSales = Math.max(...Object.values(regionTotals));

  return (
    <div className="mt-4 space-y-3">
      {["north", "south", "east", "west"].map((region) => {
        const total = regionTotals[region] || 0;
        const widthPercent = (total / maxSales) * 100;

        return (
          <div key={region} className="flex items-center gap-2">
            <span className="w-16 capitalize text-sm text-gray-600">
              {region}
            </span>
            <div className="flex-1 h-4">
              <div
                className="h-full  bg-gray-300"
                style={{ width: `${widthPercent}%` }}
              ></div>
            </div>
            {/* <span className="w-16 text-sm text-gray-500 text-right">
              {total}
            </span> */}
          </div>
        );
      })}
    </div>
  );
};

export default RegionProgressBars;
