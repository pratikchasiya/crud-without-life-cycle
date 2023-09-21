import React, {Fragment, useState} from "react";

const NewFunctionCrud = () => {
  const [obj, setobj] = useState({hobbies: []});
  const [array, setarray] = useState([]);

  const getData =async (e) => {
    if (e.target.name == "hobbies") {
      if (e.target.checked) {
        obj.hobbies.push(e.target.value);
      } else {
        // let index = obj.hobbies.findIndex(x => x == e.target.value)
        // obj.hobbies.splice(index , 1)

        obj.hobbies = obj.hobbies.filter((x) => x != e.target.value);
      }
    } else if (e.target.name == "profile") {
      console.log(e.target.files[0]);
      obj.profile =await toBase64(e.target.files[0])
    }
     else {
      obj[e.target.name] = e.target.value;
    }
    setobj({...obj});
    // console.log(obj)
  };

  const save = () => {
    array.push(obj);
    setarray([...array]);
    console.log(array);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <Fragment>
      <form action="" className="w-50 mx-auto border border-1 p-4 mt-5">
        <h3>FORM {obj.fname}</h3>
        <label htmlFor="" className="d-block">
          First Name
        </label>
        <input type="text" name="fname" className="w-100" onChange={getData} />
        <label htmlFor="" className="d-block">
          Last Name
        </label>
        <input type="text" name="lname" className="w-100" onChange={getData} />
        <label htmlFor="" className="d-block">
          Email
        </label>
        <input type="email" name="email" className="w-100" onChange={getData} />
        <label htmlFor="" className="d-block">
          Gender
        </label>
        <input type="radio" name="gender" value="Male" onChange={getData} />
        Male
        <input type="radio" name="gender" value="FeMale" onChange={getData} />
        Female
        <label htmlFor="" className="d-block">
          Hobby
        </label>
        <input
          type="checkbox"
          name="hobbies"
          value="Cricket"
          onChange={getData}
        />
        Cricket
        <input
          type="checkbox"
          name="hobbies"
          value="Football"
          onChange={getData}
        />
        Footbal
        <input
          type="checkbox"
          name="hobbies"
          value="Music"
          onChange={getData}
        />
        Music
        <label htmlFor="" className="d-block">
          Profile
        </label>
        <input type="file" name="profile" onChange={getData} />
        <br />
        <button type="button" className="btn btn-success mt-4" onClick={save}>
          Save
        </button>
      </form>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {array.map((x, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td><img src={x.profile} alt="" width={40} height={40} /></td>
                <td>{x.fname}</td>
                <td>{x.lname}</td>
                <td>{x.email}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default NewFunctionCrud;
