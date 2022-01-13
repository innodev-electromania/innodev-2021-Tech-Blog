import User from "../schema/user_schema.js";

export const CreateUser = async (request, response) => {
  try {
    const exist = await User.findOne({ email: request.body.email });
    if (exist) {
      return response.status(401).json("User Already exists");
    }

    const user = request.body;
    if (user.password === user.confirmedPassword) {
      const newuser = new User(user);

      await newuser.save();
      response.status(200).json("User successfully registered");
    } else {
      response.status(200).json("Wrong Credentials");
    }
  } catch (error) {
    console.log("Error :  ", error.message);
  }
};
export const LoginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const useremail = await User.findOne({ email: email });
    if (useremail) {
      if (useremail.password === password) {
        response
          .status(201)
          .json({ message: "User login successful", loggedInUser: useremail });
      } else {
        response.status(201).json("Password didn't match");
      }
    } else {
      response.status(201).json("User not registered");
    }
  } catch (err) {
    response.status(400).send("Invalid login credentials");
  }
};
