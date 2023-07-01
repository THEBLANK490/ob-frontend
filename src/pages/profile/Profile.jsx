import React, { useState } from "react";

const Profile = () => {
      // get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

    const [fname, setFname ] = useState(user.fname);
    const [lname, setLname ] = useState(user.lname);
    const [email, setEmail ] = useState(user.email);
    const [profileImage, setProfileImage] = useState("");

    const handleImageUpload = (e) => {
        // const file = e.target.files[0];
        // const reader = new FileReader();
        // reader.onload = () => {
        //   setProductImage(reader.result);
        // };
        // if (file) {
        //   reader.readAsDataURL(file);
        // }
        setProfileImage(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
          setProfileImage(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      };

  return (
    <>
      <div class="card profile text-center py-3 style={{width: 18rem}}">
        <img
          class="card-img-top"
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
          alt=""
        />
        <div class="card-body">
          <p class="card-text">Welcome, {user.fname}</p>
          <hr />
          <p class="my-0 font-weight-bold">
            Name: {user.fname} {user.lname}
          </p>
          <p class=" font-weight-bold">Email: {user.email}</p>
        </div>

        <button
          type="button"
          class="btn btn-primary"
          data-mdb-toggle="modal"
          data-mdb-target="#exampleModal"
        >
          Edit Profile <i class="fas fa-user-edit"></i>
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Profile
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <label htmlFor="fname">Firstname</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="form-control"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />

                  <label htmlFor="lname">Lastname</label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="form-control"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />

                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="profile">Profile</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleImageUpload}
                  />
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
