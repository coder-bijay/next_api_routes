const Home = async () => {
  return (
    <div className="w-full h-full px-10 gap-10 flex flex-col items-center">
      Welcome to the home page
      <div className="flex flex-wrap gap-10 pb-20">
        <div className={"h-[200px] text-center w-[300px] text-white bg-fuchsia-950 screen_upto_560"}>
          1 - min 560 screen
        </div>
        <div className={"h-[200px] text-center w-[300px] text-white bg-yellow-500 screen_1023"}>
          2 - min 1023 screen
        </div>
        <div className={"h-[200px] text-center w-[300px] text-white bg-red-500 screen_1535"}>3 - min 1535 screen</div>
        <div className={"h-[200px] text-center w-[300px] text-white bg-blue-500 screen_1599"}>4 - min 1599 screen</div>
        <div className={"h-[200px] text-center w-[300px] text-white bg-gray-500 screen_1699"}>5 - min 1699 screen</div>
        <div className={"h-[200px] text-center w-[300px] text-white bg-green-500 screen_1919"}>6 - min 1919 screen</div>
        <div className={"h-[200px] text-center w-[300px] text-white bg-black screen_above_1920"}>
          7 - above 1920 screen
        </div>
      </div>
    </div>
  );
};

export default Home;
