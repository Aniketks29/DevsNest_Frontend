

const FoodInfo = (props) => {
    let {foodName, foodCal, link} = props;
    return (
        <div className="foodCard">
            <img src={link} alt="" />
            <div className="foodName">
                {foodName}
            </div>
            <div className="foodCal">
                You have consumed {foodCal} amount of Calories.
            </div>
        </div>
    );
}

export default FoodInfo;