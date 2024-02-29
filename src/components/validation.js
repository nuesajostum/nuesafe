const validation = (values) => {

    let errors={};

    if(!values.fullname){
        errors.fullname="Name is required."
    }

    if(!values.state){
        errors.state="This field is required."
    }

    if(!values.number){
        errors.number="Phone No. is required."
    }


    if(!values.email){
        errors.email="Email is required."
        
    } else if (!/\S+@S+\.\S+/.test(values.email))
    {errors.email="Email is invalid."
    }

    if(!values.matric){
        errors.matric="Matric No. is required."
    }

    if(!values.department){
        errors.department="This field is required is required."
    }

    if(!values.level){
        errors.level="This field is required."
    }

    if(!values.password){
        errors.password="Password is required."
    } else if(values.password.length < 5) {
        errors.password="Password must be more than five characters"
    }

    if(!values.confirm){
        errors.confirm="This field is required."
    }


  return errors;

};

export default validation