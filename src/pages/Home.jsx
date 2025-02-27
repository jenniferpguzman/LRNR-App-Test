import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center mt-6">
        <img src="/lrnr.png" alt="lrnr logo" className="mx-auto" />
      </div>
      <h2 className="text-center text-2xl mt-4">
        Your guided path to programming enlightenment
      </h2>
      <div className="flex justify-center mt-4">
      <button className="bg-teal-500 text-white px-6 py-3 m-4"
      onClick={() => navigate('/quiz')}>
        Begin Journey
      </button>
      </div>
      <div className="flex flex-wrap justify-center gap-16 mt-6 max-w-5xl mx-auto mb-16">
        <div className="bg-white text-gray-800 p-4 rounded-lg flex flex-col items-center w-64">
        <img src="/lightening.png" alt="lightening-image"  className="w-16 h-16 mb-2"/>
        <strong className="text-lg">Personalized Quizzes</strong>
        <p className="text-center mt-2">
          {" "}
          Greetings, young padawan. Are you ready to embark on a journey of
          personalized enlightenment through the art of coding? Our app, can
          create custom quizzes that align with your coding skills and
          interests. Whether you are a novice or a master, our system can
          generate questions that will test your proficiency in programming
          languages, tools, and concepts
        </p>
        </div>
        <div className="bg-white text-gray-800 p-4 rounded-lg flex flex-col items-center w-64">
        <img src="/money.png" alt="money-image"  className="w-16 h-16 mb-2"/>
        <strong className="text-lg">Rewarding </strong>
        <p className="text-center mt-2">
          {" "}
          Our app is designed to be both challenging and rewarding, so you can learn new concepts
          while enjoying the process. With our personalized quiz app, you can track your progress, compete with
          your peers, and discover new areas of expertise. The journey of a thousand lines of code 
          begins with a single keystroke.
        </p>
        </div>
        <div className="bg-white text-gray-800 p-4 rounded-lg flex flex-col items-center w-64">
        <img src="/person.png" alt="person-image"  className="w-16 h-16 mb-2"/>
        <strong className="text-lg">Personal SME</strong>
        <p className="text-center mt-2">
          {" "}
          Welcome to the path of knowledge. Our app is like having a personal subject matter expert 
          at your side, guiding you on your journey towards wisdom.
        </p>
        </div>
      </div>
    </>
  );
}

export default Home;
