import React from 'react';

interface ActivityCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: string[];
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  participants,
}) => {
  return (
    <div className="activity-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <div className="participants-section">
        <h3 style={{ marginTop: '1.5em', marginBottom: '0.5em', color: '#2d6cdf' }}>
          Participants
        </h3>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '1.5em',
          background: '#f6f8fa',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          margin: 0,
          marginBottom: '1em'
        }}>
          {participants.length === 0 ? (
            <li style={{ color: '#888' }}>No participants yet</li>
          ) : (
            participants.map((name: any, idx: any) => (
              <li key={idx} style={{ padding: '0.25em 0', color: '#333' }}>
                {name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ActivityCard;