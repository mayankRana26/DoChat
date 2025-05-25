const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className="flex mt-2 justify-around">
        <div className=" form-control">
            <label className={`label cursor-pointer gap-2 ${selectedGender === 'male' ? "selected":  ''}`}>
                <span className="label-text">Male</span>
                <input type="checkbox"  className="checkbox checkbox-success"
                checked={selectedGender === 'male'}
                onChange={() => onCheckboxChange('male')}
                />

            </label>
        </div>
        <div className=" form-control">
           <label className={`label cursor-pointer gap-2 ${selectedGender === 'female' ? "selected":  ''}`}>
                <span className="label-text"> Female</span>
                <input type="checkbox"  className="checkbox checkbox-success"
                checked={selectedGender === 'female'}
                onChange={() => onCheckboxChange('female')}
                />

            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox