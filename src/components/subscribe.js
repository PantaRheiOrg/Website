import React, { useState } from 'react';

import '../css/subscribe.scss';

const FieldGroup = (props) => {
	const {label} = props;
	const [isRaised, setIsRaised] = useState(false);
	
 	return (
		<div className="form__field-group">
			<label className={`form__label ${isRaised && 'form__label--raised'}`}>{label}</label>
			<input
				className="form__input"
				onFocus={() => setIsRaised(true)}
				onBlur={e => e.target.value < 1 && setIsRaised(false)}
			/>
		</div>
    )
}
const Subscribe = ({language}) => {
    return (
		<form
			className="form"
			onSubmit={e => e.preventDefault()}
		>
			<h3 className="form__title">Subscribe</h3>
			<FieldGroup label="Name"/>
			<FieldGroup label="Email"/>
			<input
				className="form__submit"
				type="submit"
				value="Submit"
				onClick={e => e.target.blur()}
			/>
		</form>
	);
  };
  
  
  
  export default Subscribe;
