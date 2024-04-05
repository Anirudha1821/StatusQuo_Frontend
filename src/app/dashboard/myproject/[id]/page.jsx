"use client"
import Chart from 'chart.js/auto';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';



// export default function Home() {
//   const canvas1 = useRef();
//   const canvas2 = useRef();
//   const canvas3 = useRef();
//   const canvas4 = useRef();
//   const canvas5 = useRef();
//   const canvas6 = useRef();

//   useEffect(() => {
//     const labels = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5'];
//     const percentages1 = [12, 19, 3, 2, 3];
//     const percentages2 = [8, 15, 5, 4, 6];
//     const percentages3 = [10, 12, 8, 5, 5];
//     const percentages4 = [5, 10, 15, 7, 3];
//     const percentages5 = [18, 10, 5, 4, 8];
//     const percentages6 = [7, 13, 10, 6, 4];

//     const createChart = (ctx, data, title) => {
//       return new Chart(ctx, {
//         type: 'pie',
//         data: {
//           labels: labels,
//           datasets: [
//             {
//               label: 'Tasks',
//               data: data,
//               backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//               ],
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'bottom',
//             },
//             title: {
//               display: true,
//               text: title,
//               fontSize: 48,
//             },
//           },
//           layout: {
//             padding: {
//               left: 10,
//               right: 10,
//               top: 10,
//               bottom: 10,
//             },
//           },
//           radius: '50%',
//         },
//       });
//     };

//     // Chart 1
//     const ctx1 = canvas1.current;
//     let chart1 = createChart(ctx1, percentages1, 'Number of tasks 1');

//     // Chart 2
//     const ctx2 = canvas2.current;
//     let chart2 = createChart(ctx2, percentages2, 'Number of tasks 2');

//     // Chart 3
//     const ctx3 = canvas3.current;
//     let chart3 = createChart(ctx3, percentages3, 'Number of tasks 3');

//     // Chart 4
//     const ctx4 = canvas4.current;
//     let chart4 = createChart(ctx4, percentages4, 'Number of tasks 4');

//     // Chart 5
//     const ctx5 = canvas5.current;
//     let chart5 = createChart(ctx5, percentages5, 'Number of tasks 5');

//     // Chart 6
//     const ctx6 = canvas6.current;
//     let chart6 = createChart(ctx6, percentages6, 'Number of tasks 6');

//     // Cleanup function
//     return () => {
//       chart1.destroy();
//       chart2.destroy();
//       chart3.destroy();
//       chart4.destroy();
//       chart5.destroy();
//       chart6.destroy();
//     };
//   }, []);

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-6'>
//           <canvas id='myChart1' ref={canvas1}></canvas>
//         </div>
//         <div className='col-md-6'>
//           <canvas id='myChart2' ref={canvas2}></canvas>
//         </div>
//       </div>
//       <div className='row'>
//         <div className='col-md-6'>
//           <canvas id='myChart3' ref={canvas3}></canvas>
//         </div>
//         <div className='col-md-6'>
//           <canvas id='myChart4' ref={canvas4}></canvas>
//         </div>
//       </div>
//       <div className='row'>
//         <div className='col-md-6'>
//           <canvas id='myChart5' ref={canvas5}></canvas>
//         </div>
//         <div className='col-md-6'>
//           <canvas id='myChart6' ref={canvas6}></canvas>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { Bar } from 'react-chartjs-2';

// export default function Home() {
//   const canvas = useRef();

//   useEffect(() => {
//     const ctx = canvas.current.getContext('2d');

//     let chartStatus = Chart.getChart(ctx);
//     if (chartStatus !== undefined) {
//       chartStatus.destroy();
//     }

//     const chart = new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: ['Task1', 'Task2', 'Task3', 'Task4', 'Task5'],
//         datasets: [
//           {
//             label: 'Task 1',
//             data: [12, 19, 3, 2, 3],
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           title: {
//             display: true,
//             text: 'Number of Tasks completed in the Project',
//           },
//         },
//         layout: {
//           padding: {
//             left: 10,
//             right: 10,
//             top: 10,
//             bottom: 10,
//           },
//         },
//         radius: '60%',
//       },
//     });
//   }, []);

//   const VulnChart = () => {
//     return (
//       <div>
//         <Bar
//           data={{
//             labels: [
//               "Task1",
//               "Task2",
//               "Task3",
//               "Task4",
//               "Task5"
//             ],
//             datasets: [
//               {
//                 label: "Last Month",
//                 data: [15, 12, 6, 7, 4],
//                 backgroundColor: ["red", "green", "blue", "purple", "green"],
//                 borderColor: "orange",
//                 borderWidth: 2
//               },
//               {
//                 label: "This Month",
//                 data: [20, 13, 6, 8, 9],
//                 backgroundColor: "purple",
//                 borderColor: "red",
//                 borderWidth: 2
//               }
//             ]
//           }}
//           height={300}
//           width={500}
//           options={{
//             maintainAspectRatio: false
//           }}
//         />
//       </div>
//     );
//   };

//   return (
//     <div className='container'>
//       <canvas id='myChart' ref={canvas}></canvas>
//       <br></br>
//       <h1 style={{ textAlign: 'center' }}>Monthly Report</h1>
//       <br></br>
//       <VulnChart />
//     </div>
//   );
// }
export default function Home() {
  const canvasChecklist = useRef();
  const canvasFeatures = useRef();
  const [data, setData] = useState({
    "features": [
        {
            "name": "create user and project",
            "status": "In Progress",
            "percentage": 50,
            "description": "Creating and getting user by ID and project by ID",
            "checklist": [
                {
                    "name": "Create and get user by id",
                    "status": "Complete",
                    "percentage": 100,
                    "description": "Functionality to create and retrieve user by ID"
                },
                {
                    "name": "Create and get project by ID",
                    "status": "In Progress",
                    "percentage": 0,
                    "description": "Functionality to create and retrieve project by ID"
                }
            ]
        },
        {
            "name": "Fetch code from github repository",
            "status": "Complete",
            "percentage": 100,
            "description": "Successfully fetching current code and commitwise code",
            "checklist": [
                {
                    "name": "Fetch current code",
                    "status": "Complete",
                    "percentage": 100,
                    "description": "Code successfully fetched from the repository"
                },
                {
                    "name": "Fetch commitwise code",
                    "status": "Complete",
                    "percentage": 100,
                    "description": "Code fetched based on commits"
                }
            ]
        },
        {
            "name": "Status Tracker",
            "status": "Not Started",
            "percentage": 0,
            "description": "Feature to track the current status of the project",
            "checklist": [
                {
                    "name": "Track current status of project",
                    "status": "Not Started",
                    "percentage": 0,
                    "description": "Functionality to track project status"
                }
            ]
        },
        {
            "name": "Code Help chatbot",
            "status": "In Progress",
            "percentage": 70,
            "description": "Chatbot WebSocket API to resolve user queries by generating code PDF",
            "checklist": [
                {
                    "name": "Chatbot websocket api to resolve user queries by generating code pdf",
                    "status": "In Progress",
                    "percentage": 70,
                    "description": "API to assist users with code-related queries"
                }
            ]
        },
        {
            "name": "Documentation generator",
            "status": "Complete",
            "percentage": 100,
            "description": "Successfully generating documentation of a repo based on user guidelines",
            "checklist": [
                {
                    "name": "Generate documentation of a repo based on user guidelines",
                    "status": "Complete",
                    "percentage": 100,
                    "description": "Documentation generation feature implemented"
                }
            ]
        },
        {
            "name": "Create API to fetch all PR list and add comment to all open PRs",
            "status": "Not Started",
            "percentage": 0,
            "description": "Feature to create an API to fetch all PR list and add comments to open PRs",
            "checklist": []
        },
        {
            "name": "Issue",
            "status": "Not Started",
            "percentage": 0,
            "description": "Feature to fetch all issues on the repository and add comments to open issues",
            "checklist": [
                {
                    "name": "Fetch all issues on the repository and add comment to all open issues",
                    "status": "Not Started",
                    "percentage": 0,
                    "description": "Functionality to retrieve and comment on issues"
                }
            ]
        }
    ]
});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const fetchData = async () => {
    try {
      const id = pathname.split('/').pop();
      console.log(id);
      const response = await axios.get(`http://localhost:5000/status/${id}`);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!data || !canvasFeatures.current) return; // Add this check
  
    const ctxFeatures = canvasFeatures.current;
  
    let chartFeatures = Chart.getChart(ctxFeatures);
  
    if (chartFeatures !== undefined) {
      chartFeatures.destroy();
    }
  
    const featuresData = data.features || [];
    const featuresLabels = featuresData.map(item => item.name);
    const featuresPercentages = featuresData.map(item => item.percentage);
  
    chartFeatures = new Chart(ctxFeatures, {
      type: 'bar',
      data: {
        labels: featuresLabels,
        datasets: [
          {
            label: 'Feature Percentage',
            data: featuresPercentages,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
  }, [data]);
  

  return (
    <>
      (
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <canvas id='chartChecklist' ref={canvasChecklist}></canvas>
            </div>
            <div className='col-md-6'>
              <canvas id='chartFeatures' ref={canvasFeatures}></canvas>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
        </div>
      )
    </>
  );
}
