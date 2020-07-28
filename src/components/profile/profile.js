import React, { useState, useEffect } from "react";
import Pagination from "../pagination/pagination";
import "./list-user.scss";
import Usercontent from "./list-user-body";
import Searchuser from "../search/search";
import { profileStart } from "../../action/action";
import { connect } from "react-redux";

const Listuser = (props) => {
  const [values, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [pagenumber, setPageNumber] = useState(1);

  useEffect(() => {
    let ignore = false;
    if (!ignore) props.profileStart();
    return () => {
      ignore = true;
    };
  }, [pagenumber]);

  let data =
    props.profile.payload && props.profile.payload.data
      ? props.profile.payload.data
      : [];
  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = async (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageNumber(pageNumber);
  };

  const handleSearch = (value) => {
    setValue(value);
  };

  let searchUser = currentPosts.filter((names) => {
    return names.title.toLowerCase().indexOf(values.toLowerCase()) !== -1;
  });
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div
          style={{
            float: "right",
            paddingBottom: "10px",
            paddingRight: "70px",
          }}
        >
          <Searchuser data={searchUser} onChange={handleSearch} />
        </div>
        <table className="ui celled collapsing very basic table">
          <thead className="">
            <tr className="">
              <th className="">Id</th>
              <th className="">Title</th>
              <th className="">Event Data Utc</th>
              <th className="">Event Data Unix</th>
              <th className="">Wikipedia</th>
              <th className="">Articale</th>
            </tr>
          </thead>
          <tbody className="body">
            <Usercontent bodyData={searchUser} />
          </tbody>
        </table>
        <div style={{ paddingLeft: "0px" }}>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
        
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
 
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    profileStart: () => dispatch(profileStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listuser);

