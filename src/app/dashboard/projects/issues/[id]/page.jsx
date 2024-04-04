'use client'
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import axios from 'axios';

const PRReviewerPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [prData, setPrData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const id = pathname.split('/').pop();
    console.log(id);
    axios.get(`http://localhost:5000/issue/suggest/${id}`)
      .then((res) => {
        console.log(res.data);
        setPrData(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && !prData ? (
        <div>No data found for PR</div>
      ) : (
        <div className="container mx-auto px-4">
          {prData && prData.map((pr) => (
            <div key={pr.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <h2 className="text-black-xl font-semibold mb-2">
                {pr.number} {pr.title}
              </h2>
              <a href={pr.url} className="text-blue-500">
                {pr.url}
              </a>
              <p className="text-gray-600">{pr.title}</p>
              <p className="text-gray-600">Author: {pr.number}</p>
              <p className="text-gray-600">Status: {pr.username}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PRReviewerPage;
