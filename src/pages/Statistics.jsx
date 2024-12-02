import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Dell XPS 13', Price: 80, Total: 60, Rating: 90 },
    { name: 'Dell XPS 15', Price: 60, Total: 80, Rating: 75 },
    { name: 'Dell XPS 17', Price: 90, Total: 70, Rating: 85 },
    { name: 'Dell XPS 13', Price: 50, Total: 90, Rating: 65 },
    { name: 'Dell XPS 15', Price: 70, Total: 60, Rating: 85 },
    { name: 'Dell XPS 13', Price: 80, Total: 75, Rating: 90 },
];

function Statistics() {
    return (
        <div className="statistics-container" style={{ textAlign: 'center', margin: '2rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#6b46c1' }}>Statistics</h2>
            <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                Explore the latest gadgets that will take your experience to the next level.
                From smart devices to the coolest accessories, we have it all.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Price" fill="#9538E2" />
                    {/* <Bar dataKey="Total" fill="#82ca9d" /> */}
                    <Bar dataKey="Rating" fill="#ffc658" />
                </BarChart>
            </div>
        </div>
    );
}

export default Statistics;
