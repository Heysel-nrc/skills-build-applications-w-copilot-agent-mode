import React, { useEffect, useState } from 'react';


function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://automatic-space-waddle-g47pr5g4gr9q2rj6-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Activities</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity._id}>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary mt-2">Add Activity</button>
      </div>
    </div>
  );
}

export default Activities;
