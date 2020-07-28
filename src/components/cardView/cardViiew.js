import React from "react";
import { connect } from "react-redux";
import "./cardView.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Cardview extends React.Component {
  render() {
    return (
      <div
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        {this.props.profile.payload &&
          this.props.profile.payload.data.map((ele, index) => {
            return (
              <div className="card-width"  key={index}>
                <Card
                  style={{ width: 350, margin: 20, backgroundColor: "black" }}
                  key={index}
                >
                 
                    <CardContent >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ color: "#fff" }}
                      >
                        {ele.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ color: "#fff" }}
                      >
                        {ele.details}
                      </Typography>
                    </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Cardview);
