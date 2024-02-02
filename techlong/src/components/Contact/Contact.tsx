import Header from "../Header/Header";

const Contact = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <h1 className="text-center text-[2rem] text-title-color font-bold tracking-wider">
        Contact Us
      </h1>
      <div className="mt-[2rem] h-full w-full flex justify-center items-center">
        <form
          action=""
          className="flex flex-col gap-[.8rem] justify-center items-center font-bold"
        >
          <div className="flex gap-2">
            <input
              className="w-[15rem] h-[3rem] p-[1rem] bg-background-card placeholder:text-title-color rounded-xl text-white outline-none"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              className="w-[15rem] h-[3rem] p-[1rem] bg-background-card placeholder:text-title-color rounded-xl text-white outline-none"
              type="text"
              name=""
              id=""
              placeholder="SurName"
            />
          </div>
          <input
            className="h-[3rem] w-full p-[1rem] bg-background-card placeholder:text-title-color rounded-xl text-white outline-none"
            type="email"
            name=""
            id=""
            placeholder="Email Address"
          />
          <textarea
            className="p-[1rem] w-full bg-background-card placeholder:text-title-color rounded-xl text-white outline-none resize-none"
            placeholder="Send us a message"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>

          <input
            className="bg-background-card w-[10rem] h-[3rem] rounded-xl font-bold text-white transintion duration-[.4s] hover:bg-title-color hover:text-black cursor-pointer "
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
