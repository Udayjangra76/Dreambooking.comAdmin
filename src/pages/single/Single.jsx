import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Chart from "../../components/chart/Chart.jsx";
import List from "../../components/table/Table.jsx";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFP-sHF2UI-7g/profile-displayphoto-shrink_400_400/0/1664954278284?e=1692230400&v=beta&t=9x0CNHRly6RmG9oDjRNTnYGfxYx-jyYzEck4W7kbulE"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Uday Jangra</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">uday.jangra76@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9729863619</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Pehowa Kurukshetra (136128) Haryana
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
