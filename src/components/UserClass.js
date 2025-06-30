import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "USA",
      },
    };
    // console.log(this.props.name + " Constructor Called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Neeraj9355",{
      headers:{
        Authorization:`Bearer${"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"}`,
      }
    });
    const json = await data.json();
    this.setState({
      userInfo:json,
    });
    // this.timer = setInterval(()=>{
    //   console.log("Time Start");
    // },1000);
    // console.log(json);
  }
  componentDidUpdate(){
    // console.log("Component Did Mount");
  }
  componentWillUnmount(){
    // clearInterval(this.timer);
    // console.log("Component Will Unmount");
  }
  render() {
    // const { name, location } = this.props;
    // const { count, count1, count2 } = this.state;
    // console.log(this.props.name + "Render Called");
    const {name,location,avatar_url}=this.state.userInfo;
    return (
      <div className="userCard">
        {/* <h2>Count 0 :{count}</h2>
        <h2>Count 1 :{count1}</h2>
        <h2>Count 2 :{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increment
        </button> */}
        <img className="rounded-lg" src={avatar_url}/>
        <h2 className="font-bold">Name : {name}</h2>
        <h3 className="font-bold">Location : { location}</h3>
        <h4 className="font-bold">Contact : ns074452@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
