import chewie from "../assets/baby_chewie.jpeg";
import Orb from "../Orb"

const Avatar = () => {
  return (
    <>
      <img
        className="w-20 h-20 ml-12 mt-10 p-1 rounded-full  absolute"
        src={chewie}
        alt="Bordered avatar"
      />
      {/* Testing avatar orb thingy  */}
      <div className="w-[145px] h-[145px] pl-8 pt-4">
        <Orb
          hoverIntensity={0.0}
          rotateOnHover={true}
          hue={39}
          forceHoverState={true}
        />
      </div>
    </>
  );
};

export default Avatar;
