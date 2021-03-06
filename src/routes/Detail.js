import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if( location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            console.log(location);
            return <span>{location.state.title}</span>
        } else {
            console.log(location);
            return null;
        }
    }
}

export default Detail;