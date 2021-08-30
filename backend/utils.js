import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      email: user.email,
    },
    process.env.JWT_SECRET || "something",
    {
      expiresIn: "30d",
    }
  );
};
