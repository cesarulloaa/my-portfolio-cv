import MyPhoto from "../assets/nano-banana-profile.jpg";

export default function ProfilePic() {
  return (
    <img
      src={MyPhoto}
      alt="Profile picture"
      className="w-80 h-80 rounded-full shadow-lg object-cover"
    />
  );
}
