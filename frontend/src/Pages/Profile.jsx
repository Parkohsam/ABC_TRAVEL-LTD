import "./styles/Profile.css";
import "./styles/ProfileModal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../service/service";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const firstInitial = user?.firstName?.charAt(0) || "";
  const lastInitial = user?.lastName?.charAt(0) || "";

  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
  });

  // Back button
  const handleBack = () => {
    navigate("/Dashboard");
  };

  // Sign out
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  // Edit form change
  const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.id]: e.target.value });
    };

    // Save edit
    const handleSaveEdit = async () => {
    try {
        const data = await updateUser(editForm);

        if (data.status) {
        localStorage.setItem("user", JSON.stringify(data.data));
        setShowEditModal(false);
        window.location.reload();
        } else {
        alert(data.message || "Error updating profile");
        }
    } catch (err) {
        console.error("Error updating profile:", err);
        alert("Error updating profile");
    }
    };

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-top-header">
        <button className="back-btn" onClick={handleBack}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1 className="profile-title">Profile</h1>
        <button className="menu-btn">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>

      {/* Profile Picture Section */}
      <div className="profile-pic-section">
        <div className="profile-avatar-large">
          <span>
            {firstInitial}
            {lastInitial}
          </span>
          <div className="camera-icon">
            <i className="fas fa-camera"></i>
          </div>
        </div>
        <h2 className="profile-user-name">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className="profile-user-email">{user?.email}</p>
      </div>

      {/* Profile Info Card */}
      <div className="profile-info-card">
        <div className="form-field">
          <label className="field-label">FIRST NAME</label>
          <p className="field-value">{user?.firstName}</p>
        </div>
        <div className="form-field">
          <label className="field-label">LAST NAME</label>
          <p className="field-value">{user?.lastName}</p>
        </div>
        <div className="form-field">
          <label className="field-label">EMAIL ADDRESS</label>
          <p className="field-value">{user?.email}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="profile-buttons">
        <button className="btn-edit-profile" onClick={() => setShowEditModal(true)}>
          <i className="fas fa-edit"></i> Edit Profile
        </button>
        <button className="btn-signout" onClick={() => setShowSignOutModal(true)}>
          Sign Out
        </button>
      </div>

      {/* Settings Section */}
      <div className="settings-section">
        <h3 className="settings-title">SETTINGS</h3>
        <div className="settings-list">
          <div className="setting-item">
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="setting-item">
            <i className="fas fa-shield-alt"></i>
            <span>Privacy & Security</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="setting-item">
            <i className="fas fa-question-circle"></i>
            <span>Help Center</span>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>

      {/* Sign Out Modal */}
      {showSignOutModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-icon signout-icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <h3 className="modal-title">Sign Out</h3>
            <p className="modal-message">Are you sure you want to sign out?</p>
            <div className="modal-actions">
              <button
                className="modal-btn cancel"
                onClick={() => setShowSignOutModal(false)}
              >
                Cancel
              </button>
              <button className="modal-btn confirm" onClick={handleSignOut}>
                Yes, Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-box edit-modal">
            <div className="modal-header">
              <h3 className="modal-title">Edit Profile</h3>
              <button
                className="modal-close"
                onClick={() => setShowEditModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="edit-form">
              <div className="edit-field">
                <label className="field-label">FIRST NAME</label>
                <input
                  type="text"
                  id="firstName"
                  className="edit-input"
                  value={editForm.firstName}
                  onChange={handleEditChange}
                />
              </div>
              <div className="edit-field">
                <label className="field-label">LAST NAME</label>
                <input
                  type="text"
                  id="lastName"
                  className="edit-input"
                  value={editForm.lastName}
                  onChange={handleEditChange}
                />
              </div>
              <div className="edit-field">
                <label className="field-label">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  className="edit-input"
                  value={editForm.email}
                  onChange={handleEditChange}
                />
              </div>
            </div>
            <div className="modal-actions">
              <button
                className="modal-btn cancel"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button className="modal-btn confirm" onClick={handleSaveEdit}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;