import { useEffect, useState } from 'react';
import { DataTable } from '../components/ui/data-table/data-table';
import { dummyData } from './DummyData';
import { userMetricColumns, type UserMetric } from './UserMetricColumns';

const UserMetricsTable = () => {
  const [data, setData] = useState<UserMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and then set dummy data
    const loadData = () => {
      setIsLoading(true);
      // Simulate API delay (optional)
      setTimeout(() => {
        setData(dummyData());
        setIsLoading(false);
      }, 500);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
    
    console.log(data);

  return (
    <div className="container mx-auto p-5">
      <DataTable columns={userMetricColumns} data={data} />
    </div>
  );
};

export default UserMetricsTable;
