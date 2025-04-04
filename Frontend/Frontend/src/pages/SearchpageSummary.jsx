import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/searchsummary.css";

const SearchpageSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { medicineCount = 0, selectedMedicines = [] } = location.state || {};
  // Function to handle the action when the user clicks "View Shopping Cart"

  // Check if any prescription medicines are selected
  const hasPrescriptionItems = selectedMedicines.some(
    (medicine) => medicine.prescription
  );

  const viewShoppingCart = () => {
    navigate("/findmeds");
  };

  const continueShopping = () => {
    // For now, we'll just show an alert
    alert(`Continue shopping cart with ${medicineCount} medicines`);
    // navigate("");
  };

  return (
    <div className="summary-container">
      <div className="searchpage-summary">
        <p>You've added {medicineCount} medicine(s) to your cart</p>

        {/* Optional: Show list of medicines */}
        {selectedMedicines.length > 0 && (
          <div className="medicine-list">
            <h3>Selected Medicines:</h3>
            <ul className="summary-list">
              {selectedMedicines.map((medicine) => (
                <li key={medicine.id}>
                  {medicine.name} - {medicine.dosage} - {medicine.packageSize} -{" "}
                  {medicine.quantity}
                  {medicine.prescription}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="summary-actions">
          <button
            onClick={viewShoppingCart}
            className="summary-btn view-cart-btn"
          >
            View Shopping Cart
          </button>

          <button
            onClick={continueShopping}
            className="summary-btn continue-btn"
          >
            Continue Shopping
          </button>
        </div>
        {/* Prescription warning message */}
        {hasPrescriptionItems && (
          <div className="prescription-warning">
            <p className="prescription-warning-text">
              ⚠️ You have prescription items in your cart.
            </p>
            <p className="prescription-text">
              {" "}
              A valid prescription should contain:
            </p>
            <ul className="prescription-list">
              <li>Date of prescription</li>
              <li>Patients details</li>
              <li>Dosage</li>
            </ul>
            <p className="prescription-sample">See Sample</p>
            <p className="prescription-text">
              Prescription can be provided and verified at pickup of the
              medicine in question.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchpageSummary;
