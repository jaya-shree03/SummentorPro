import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Nomination = () => {
  // Array of Indian state names
  const indianStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [selectedState, setSelectedState] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    fullname: "",
    email: "",
    Mobile: "",
    Telephone: "",
    Organization: "",
    selectedBusType: "",
    state: "",
    City: "",
    GSTIN: "",
    Address: "",
    Amount: "",
  });
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/user/login", values);
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to home page.");
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data:", formData);
    onFinish(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "40px 0px", backgroundColor: "#659640" }}>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div>
                <label>Select Title</label>
                <br />
                <select value={formData.title} onChange={handleChange}>
                  <option value="">Choose..</option>
                  <option value="option1">Mr</option>
                  <option value="option2">Ms</option>
                  <option value="option3">Mrs</option>
                  <option value="option4">Dr</option>
                </select>
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label>Full Name</label>
                <br />
                <input
                  name="fullname"
                  type="text"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label>Email</label>
                <br />
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div>
                <label>Mobile</label>
                <br />
                <input
                  name="Mobile"
                  type="text"
                  value={formData.Mobile}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label>Telephone</label>
                <br />
                <input
                  name="Telephone"
                  type="text"
                  value={formData.Telephone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label>Organization</label>
                <br />
                <input
                  name="Organization"
                  type="text"
                  value={formData.Organization}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div>
                <label>Select Business Type</label>
                <br />
                <select
                  value={formData.selectedBusType}
                  onChange={handleChange}
                >
                  <option value="">Select Business Type</option>
                  <option value="option1">Organization</option>
                  <option value="option2">Individual</option>
                </select>
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label>Select State</label>
                <br />
                <select value={formData.state} onChange={handleChange}>
                  <option value="">Select a state</option>

                  {indianStates.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label>City</label>
                <br />
                <input
                  name="City"
                  type="text"
                  value={formData.City}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div>
                <label>GSTIN</label>
                <br />
                <input
                  name="GSTIN"
                  type="text"
                  value={formData.GSTIN}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label>Address</label>
                <br />
                <input
                  name="Address"
                  type="text"
                  value={formData.Address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm">
              <div>
                <label> Amount</label>
                <br />
                <input
                  name="Amount"
                  type="text"
                  value={formData.Amount}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <button
              style={{ height: "50px", width: "200px", marginTop: "40px" }}
            >
              Award Categories
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
