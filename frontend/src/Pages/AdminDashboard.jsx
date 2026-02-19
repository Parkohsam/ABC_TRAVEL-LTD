import React, { useState } from "react";
import "./styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock Data
  const stats = {
    totalBookings: 240,
    totalRevenue: "$48,500",
    totalCustomers: 156,
    pendingApprovals: 12,
  };

  const packages = [
    {
      id: 1,
      name: "Economy",
      price: "$1,499",
      availability: "High",
      season: "All Year",
    },
    {
      id: 2,
      name: "Standard",
      price: "$2,499",
      availability: "Medium",
      season: "Peak Season",
    },
    {
      id: 3,
      name: "Premium",
      price: "$3,999",
      availability: "Low",
      season: "Peak Season",
    },
  ];

  const bookings = [
    {
      id: 1,
      customer: "Ahmed Hassan",
      package: "Standard",
      date: "2026-03-15",
      total: "$2,499",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Fatima Ali",
      package: "Premium",
      date: "2026-03-20",
      total: "$3,999",
      status: "Approved",
    },
    {
      id: 3,
      customer: "Omar Khan",
      package: "Economy",
      date: "2026-03-10",
      total: "$1,499",
      status: "Completed",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      bookings: 3,
      totalSpent: "$7,500",
    },
    {
      id: 2,
      name: "Muhammad Ali",
      email: "ali@example.com",
      bookings: 2,
      totalSpent: "$5,000",
    },
    {
      id: 3,
      name: "Aisha Rahman",
      email: "aisha@example.com",
      bookings: 1,
      totalSpent: "$2,499",
    },
  ];

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <div className="header-content">
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Manage your travel business</p>
        </div>
        <div className="header-actions">
          <button className="btn-notification">
            <i className="fas fa-bell"></i>
            <span className="notification-badge">3</span>
          </button>
          <div className="admin-profile">
            <img
              src="https://via.placeholder.com/40"
              alt="Admin"
              className="profile-pic"
            />
            <span>Admin</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="admin-nav">
        <button
          className={`nav-tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <i className="fas fa-chart-line"></i> Overview
        </button>
        <button
          className={`nav-tab ${activeTab === "packages" ? "active" : ""}`}
          onClick={() => setActiveTab("packages")}
        >
          <i className="fas fa-box"></i> Packages
        </button>
        <button
          className={`nav-tab ${activeTab === "bookings" ? "active" : ""}`}
          onClick={() => setActiveTab("bookings")}
        >
          <i className="fas fa-calendar-check"></i> Bookings
        </button>
        <button
          className={`nav-tab ${activeTab === "customers" ? "active" : ""}`}
          onClick={() => setActiveTab("customers")}
        >
          <i className="fas fa-users"></i> Customers
        </button>
        <button
          className={`nav-tab ${activeTab === "reports" ? "active" : ""}`}
          onClick={() => setActiveTab("reports")}
        >
          <i className="fas fa-chart-bar"></i> Reports
        </button>
      </div>

      {/* Content Area */}
      <div className="admin-content">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="tab-content">
            <h2 className="section-title">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{ backgroundColor: "#667eea" }}
                >
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="stat-info">
                  <p className="stat-label">Total Bookings</p>
                  <h3 className="stat-value">{stats.totalBookings}</h3>
                </div>
              </div>

              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{ backgroundColor: "#11998e" }}
                >
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="stat-info">
                  <p className="stat-label">Total Revenue</p>
                  <h3 className="stat-value">{stats.totalRevenue}</h3>
                </div>
              </div>

              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{ backgroundColor: "#f093fb" }}
                >
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-info">
                  <p className="stat-label">Total Customers</p>
                  <h3 className="stat-value">{stats.totalCustomers}</h3>
                </div>
              </div>

              <div className="stat-card">
                <div
                  className="stat-icon"
                  style={{ backgroundColor: "#ff6b6b" }}
                >
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <div className="stat-info">
                  <p className="stat-label">Pending Approvals</p>
                  <h3 className="stat-value">{stats.pendingApprovals}</h3>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="recent-section">
              <h3 className="section-subtitle">Recent Bookings</h3>
              <div className="activity-table">
                <div className="table-header">
                  <div className="col-customer">Customer</div>
                  <div className="col-package">Package</div>
                  <div className="col-date">Date</div>
                  <div className="col-amount">Amount</div>
                  <div className="col-status">Status</div>
                </div>
                {bookings.map((booking) => (
                  <div key={booking.id} className="table-row">
                    <div className="col-customer">{booking.customer}</div>
                    <div className="col-package">{booking.package}</div>
                    <div className="col-date">{booking.date}</div>
                    <div className="col-amount">{booking.total}</div>
                    <div className="col-status">
                      <span
                        className={`status-badge status-${booking.status.toLowerCase()}`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Packages Tab */}
        {activeTab === "packages" && (
          <div className="tab-content">
            <div className="section-header">
              <h2 className="section-title">Package Management</h2>
              <button className="btn-primary">
                <i className="fas fa-plus"></i> Add Package
              </button>
            </div>

            <div className="packages-grid">
              {packages.map((pkg) => (
                <div key={pkg.id} className="package-card">
                  <div className="package-header">
                    <h3>{pkg.name}</h3>
                    <div className="package-actions">
                      <button className="action-btn edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="package-details">
                    <div className="detail-row">
                      <span className="label">Price:</span>
                      <span className="value">{pkg.price}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Availability:</span>
                      <span
                        className={`availability availability-${pkg.availability.toLowerCase()}`}
                      >
                        {pkg.availability}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Season:</span>
                      <span className="value">{pkg.season}</span>
                    </div>
                  </div>
                  <div className="package-footer">
                    <button className="btn-secondary">Manage Season</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="tab-content">
            <div className="section-header">
              <h2 className="section-title">Booking Management</h2>
              <div className="filter-controls">
                <select className="filter-select">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>

            <div className="bookings-container">
              {bookings.map((booking) => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-main">
                    <div className="booking-info">
                      <h3>{booking.customer}</h3>
                      <p className="booking-meta">
                        {booking.package} • {booking.date}
                      </p>
                    </div>
                    <div className="booking-amount">{booking.total}</div>
                  </div>
                  <div className="booking-actions">
                    <span
                      className={`status-badge status-${booking.status.toLowerCase()}`}
                    >
                      {booking.status}
                    </span>
                    <button className="btn-action approve">
                      <i className="fas fa-check"></i> Approve
                    </button>
                    <button className="btn-action view">
                      <i className="fas fa-eye"></i> View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div className="tab-content">
            <div className="section-header">
              <h2 className="section-title">Customer Management</h2>
              <input
                type="text"
                placeholder="Search customers..."
                className="search-input"
              />
            </div>

            <div className="customers-table">
              <div className="table-header">
                <div className="col-name">Name</div>
                <div className="col-email">Email</div>
                <div className="col-bookings">Bookings</div>
                <div className="col-spent">Total Spent</div>
                <div className="col-actions">Actions</div>
              </div>
              {customers.map((customer) => (
                <div key={customer.id} className="table-row">
                  <div className="col-name">{customer.name}</div>
                  <div className="col-email">{customer.email}</div>
                  <div className="col-bookings">{customer.bookings}</div>
                  <div className="col-spent">{customer.totalSpent}</div>
                  <div className="col-actions">
                    <button className="btn-action small">
                      <i className="fas fa-file-alt"></i> Documents
                    </button>
                    <button className="btn-action small">
                      <i className="fas fa-history"></i> History
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="tab-content">
            <h2 className="section-title">Reports & Analytics</h2>

            <div className="reports-grid">
              <div className="report-card">
                <div className="report-header">
                  <h3>Booking Analytics</h3>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="report-body">
                  <div className="report-stat">
                    <span className="label">Total Bookings</span>
                    <span className="value large">240</span>
                  </div>
                  <div className="report-stat">
                    <span className="label">Month Growth</span>
                    <span className="value positive">+15%</span>
                  </div>
                  <div className="report-stat">
                    <span className="label">Conversion Rate</span>
                    <span className="value">42%</span>
                  </div>
                </div>
              </div>

              <div className="report-card">
                <div className="report-header">
                  <h3>Revenue Reports</h3>
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="report-body">
                  <div className="report-stat">
                    <span className="label">Total Revenue</span>
                    <span className="value large">$48,500</span>
                  </div>
                  <div className="report-stat">
                    <span className="label">Month Revenue</span>
                    <span className="value positive">+22%</span>
                  </div>
                  <div className="report-stat">
                    <span className="label">Avg Order Value</span>
                    <span className="value">$2,435</span>
                  </div>
                </div>
              </div>

              <div className="report-card">
                <div className="report-header">
                  <h3>Customer Highlights</h3>
                  <i className="fas fa-star"></i>
                </div>
                <div className="report-body">
                  <div className="report-stat">
                    <span className="label">Total Customers</span>
                    <span className="value large">156</span>
                  </div>
                  <div className="report-stat">
                    <span className="label">New Customers</span>
                    <span className="value positive">+32</span>
                  </div>
                  <div className="report-stat">
                    <span className="label">Retention Rate</span>
                    <span className="value">78%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="download-section">
              <h3>Export Reports</h3>
              <div className="download-buttons">
                <button className="btn-secondary">
                  <i className="fas fa-download"></i> Download PDF
                </button>
                <button className="btn-secondary">
                  <i className="fas fa-download"></i> Download CSV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
