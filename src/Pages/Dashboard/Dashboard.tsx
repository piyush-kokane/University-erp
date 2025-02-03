import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Dashboard.css"; // Add some custom styles if needed

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="container mt-4">
        <h1>Welcome to MIT-WPU</h1>
        <p>This is the main content area.</p>
      </div>
    </>
  );
};

export default DashboardPage;
