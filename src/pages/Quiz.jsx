import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [formData, setFormData] = useState({
    topic: "",
    expertise: "",
    numberOfQuestions: "5",
    styleOfQuestions: "normal",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
        const response = await fetch('http://localhost:3000/api/generate-questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Generated Questions:", data.questions)

    navigate("/quiz-questions", { state: { questions: data.questions } });
    } catch (error) {
        console.error("Error generating quiz:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz Generation Options</h1>

      <p className="text-gray-600 mb-6">
        Please choose your preferences below to generate your personalized quiz
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="topic" className="block text-sm text-gray-500 mb-2">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="short-answer"></option>
            <option value="golang">golang</option>
            <option value="aws">aws</option>
            <option value="javascript">javascript</option>
            <option value="ci/cd">CI/CD</option>
            <option value="home gardens">home gardens</option>
            <option value="coffee">coffee</option>
            <option value="finger foods">finger foods</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="expertise"
            className="block text-sm text-gray-500 mb-2"
          >
            Expertise
          </label>
          <select
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="" disabled>
              Select expertise level
            </option>
            <option value="short-answer"></option>
            <option value="novice">novice</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="numberOfQuestions"
            className="block text-sm text-gray-500 mb-2"
          >
            Number of questions
          </label>
          <select
            id="numberOfQuestions"
            name="numberOfQuestions"
            value={formData.numberOfQuestions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="styleOfQuestions"
            className="block text-sm text-gray-500 mb-2"
          >
            Style of questions
          </label>
          <select
            id="styleOfQuestions"
            name="styleOfQuestions"
            value={formData.styleOfQuestions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="short-answer"></option>
            <option value="master oogway">master oogway</option>
            <option value="1940's ganster">1940's ganster</option>
            <option value="like I'm a 8 year old">
              like I'm an 8 year old
            </option>
            <option value="normal">normal</option>
            <option value="jedi">jedi</option>
            <option value="captain jack sparrrow">captain jack sparrow</option>
            <option value="matthew mcconaugheyl">matthew mcconaughey</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded transition-colors"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Quiz;
