import "./Visitbtn.css"


const Visitbtn = () => {
    return(
        <div className="input">
        <div className="icon-container">
          <i className="fa-solid fa-calendar"></i>
        </div>
        <input
          type="text"
          className="custom-date-input"
          placeholder="Schedule a Visit"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) {
              e.target.type = "text";
            }
          }}/>
      </div>
    )
}
export default Visitbtn