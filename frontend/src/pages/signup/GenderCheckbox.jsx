const GenderCheckbox = () => {
  return (
    <div className="flex mt-2 justify-around">
        <div className=" form-control">
            <label className={`label cursor-pointer gap-2`}>
                <span className="label-text">Male</span>
                <input type="checkbox"  className="checkbox checkbox-success" />

            </label>
        </div>
        <div className=" form-control">
           <label className={`label cursor-pointer gap-2`}>
                <span className="label-text"> Female</span>
                <input type="checkbox"  className="checkbox checkbox-success" />

            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox