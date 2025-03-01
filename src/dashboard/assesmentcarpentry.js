// import React, { useState, useEffect, useRef } from "react";
// import CertificateDownload from "./certificatedownload";
// import "../dashboard/assesment.css";

// const AssessmentCarpentry = () => {
//   const [name, setName] = useState("");
//   const [isStarted, setIsStarted] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(30); // 30 seconds for each question
//   const [currentAnswers, setCurrentAnswers] = useState({});
//   const [score, setScore] = useState(0);
//   const [testEnded, setTestEnded] = useState(false);
//   const [certificateReady, setCertificateReady] = useState(false);
//   const downloadTriggered = useRef(false);

//   const [questions] = useState([
//     {
//       id: 1,
//       question: "In woodworking, what is the purpose of a kerf when using a saw?",
//       options: [
//         "A. To reduce the overall weight of the wood",
//         "B. To mark the depth of a dado joint",
//         "C. To account for the material removed by the blade",
//         "D. To smoothen the surface of the wood"
//       ],
//       answer: "C"
//     },
//     {
//       id: 2,
//       question: "Which type of joint is most suitable for constructing a strong, lightweight frame?",
//       options: [
//         "A. Mortise and tenon",
//         "B. Butt joint",
//         "C. Dado joint",
//         "D. Lap joint"
//       ],
//       answer: "A"
//     },
//     {
//       id: 3,
//       question: "In carpentry, what is the primary advantage of using a biscuit joiner?",
//       options: [
//         "A. It eliminates the need for clamps during gluing",
//         "B. It allows for quick disassembly of parts",
//         "C. It ensures precise alignment of wooden pieces",
//         "D. It strengthens end-grain connections"
//       ],
//       answer: "C. It ensures precise alignment of wooden pieces"
//     },
//     {
//       id: 4,
//       question: "What is the critical factor to consider when selecting wood for outdoor furniture?",
//       options: [
//         "A. The color of the wood",
//         "B. Its resistance to moisture and decay",
//         "C. The ease of machining the wood",
//         "D. Its availability in local markets"
//       ],
//       answer: "B. Its resistance to moisture and decay"
//     },
//     {
//       id: 5,
//       question: "Which of the following is the primary purpose of using a chisel bevel edge?",
//       options: [
//         "A. To create intricate carvings",
//         "B. To produce clean, sharp corners in joinery",
//         "C. To flatten and smooth wide surfaces",
//         "D. To cut through metal components"
//       ],
//       answer: "B. To produce clean, sharp corners in joinery"
//     },
//     {
//       id: 6,
//       question: "What is the primary risk of using greenwood in structural projects?",
//       options: [
//         "A. Increased susceptibility to fire",
//         "B. High chances of warping and cracking as it dries",
//         "C. Difficulty in sanding and finishing",
//         "D. Limited availability in the market"
//       ],
//       answer: "B. High chances of warping and cracking as it dries"
//     },
//     {
//       id: 7,
//       question: "Why is planing necessary before assembling wood components?",
//       options: [
//         "A. To reduce the weight of the wood",
//         "B. To make the wood resistant to termites",
//         "C. To ensure smooth surfaces for precise fitting",
//         "D. To darken the color of the wood"
//       ],
//       answer: "C. To ensure smooth surfaces for precise fitting"
//     },
//     {
//       id: 8,
//       question: "What is the main disadvantage of using a brad nailer for wood joints?",
//       options: [
//         "A. It leaves visible holes that need filling",
//         "B. It cannot penetrate hardwoods",
//         "C. It weakens the wood's natural grain structure",
//         "D. It is incompatible with glue-based joints"
//       ],
//       answer: "A. It leaves visible holes that need filling"
//     },
//     {
//       id: 9,
//       question: "In furniture making, why is quarter-sawn wood preferred for high-quality projects?",
//       options: [
//         "A. It is less expensive than other cuts",
//         "B. It resists warping and shows uniform grain patterns",
//         "C. It is easier to work with due to its softness",
//         "D. It absorbs finishes more quickly"
//       ],
//       answer: "B"
//     },
//     {
//       id: 10,
//       question: "When constructing a staircase, what is the function of the riser?",
//       options: [
//         "A. To support the weight of the tread",
//         "B. To provide a vertical connection between treads",
//         "C. To act as the base for handrails",
//         "D. To enhance the aesthetic appeal of the staircase"
//       ],
//       answer: "B. To provide a vertical connection between treads"
//     }]);

//   useEffect(() => {
//     if (isStarted && !testEnded && timeLeft > 0) {
//       const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//       return () => clearInterval(timer);
//     }
//     if (timeLeft === 0) {
//       handleNextQuestion();
//     }
//   }, [isStarted, timeLeft, testEnded]);

//   useEffect(() => {
//     if (isStarted && !testEnded) {
//       readQuestion();
//     }
//   }, [currentQuestionIndex, isStarted, testEnded]);

//   const readQuestion = () => {
//     const question = questions[currentQuestionIndex];
//     const utterance = new SpeechSynthesisUtterance(
//       `${question.id}. ${question.question}. Options are: ${question.options.join(", ")}`
//     );
//     speechSynthesis.speak(utterance);
//   };

//   const handleAnswerChange = (option) => {
//     setCurrentAnswers({ ...currentAnswers, [questions[currentQuestionIndex].id]: option });
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setTimeLeft(30);
//     } else {
//       handleSubmit();
//     }
//   };

//   const handleSubmit = () => {
//     let calculatedScore = 0;
//     questions.forEach((q) => {
//       if (currentAnswers[q.id] === q.answer) {
//         calculatedScore++;
//       }
//     });
//     setScore(calculatedScore);
//     setTestEnded(true);
//     if (calculatedScore / questions.length >= 0.5) {
//       setCertificateReady(true);
//     }
//   };

//   const handleRestart = () => {
//     setName("");
//     setIsStarted(false);
//     setCurrentQuestionIndex(0);
//     setTimeLeft(30);
//     setCurrentAnswers({});
//     setScore(0);
//     setTestEnded(false);
//     setCertificateReady(false);
//     downloadTriggered.current = false;
//   };

//   const handleDownloadCertificate = () => {
//     if (!downloadTriggered.current) {
//       downloadTriggered.current = true;
//     }
//   };

//   const renderCurrentQuestion = () => {
//     const question = questions[currentQuestionIndex];
//     return (
//       <div className="question-container">
//         <p className="question-text">{question.id}. {question.question}</p>
//         {question.options.map((opt, index) => (
//           <div key={index} className="option-container">
//             <input
//               type="radio"
//               name={`question-${question.id}`}
//               value={opt}
//               onChange={() => handleAnswerChange(opt)}
//               checked={currentAnswers[question.id] === opt}
//               className="radio-button"
//             />
//             <label className="option-label">{opt}</label>
//           </div>
//         ))}
//         <button
//           onClick={handleNextQuestion}
//           className="next-btn"
//           disabled={!currentAnswers[question.id]}
//         >
//           Proceed to Next Question
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="assessment-container">
//       {!isStarted && !testEnded && (
//         <div className="start-screen">
//           <h1 className="welcome-text">Welcome to the Assessment Carpentry</h1>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="name-input"
//           />
//           <button
//             onClick={() => {
//               if (name.trim()) setIsStarted(true);
//               else alert("Please enter your name to start.");
//             }}
//             className="start-btn"
//           >
//             Start Assessment
//           </button>
//         </div>
//       )}

//       {isStarted && !testEnded && (
//         <div className="assessment-content">
//           <div className="timer-container">
//             <h2 className="assessment-title">Assessment</h2>
//             <p className="time-left">
//               Time Left: {timeLeft} seconds
//             </p>
//           </div>
//           {renderCurrentQuestion()}
//         </div>
//       )}

//       {testEnded && name && (
//         <div className="result-container">
//           <div className={score / questions.length >= 0.5 ? "result-passed" : "result-failed"}>
//             <h1 className="result-text">
//               {score / questions.length >= 0.5 ? `Congratulations, ${name}!` : `Sorry, ${name}!`}
//             </h1>
//             <p>
//               {score / questions.length >= 0.5
//                 ? `You passed with a score of ${score}/${questions.length}!`
//                 : `You scored ${score}/${questions.length}. Please try again.`}
//             </p>
//             {certificateReady && score / questions.length >= 0.5 && (
//               <div className="certificate-btn-container">
//                 <button
//                   onClick={handleDownloadCertificate}
//                   className="certificate-btn"
//                 >
//                   Download Certificate
//                 </button>
//               </div>
//             )}
//           </div>
//           {downloadTriggered.current && certificateReady && (
//             <CertificateDownload name={name} certificateType="Carpentry" />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssessmentCarpentry;
import React, { useState, useEffect, useRef } from "react";
import "../dashboard/assesment.css";
import CertificateDownload from "./certificatedownload"; // Import the CertificateDownload component

const AssessmentCarpentry = () => {
  const [name, setName] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [questions] = useState([
    {
      id: 1,
      question: "In woodworking, what is the purpose of a kerf when using a saw?",
      options: [
        "A. To reduce the overall weight of the wood",
        "B. To mark the depth of a dado joint",
        "C. To account for the material removed by the blade",
        "D. To smoothen the surface of the wood"
      ],
      answer: "C. To account for the material removed by the blade"
    },
    {
      id: 2,
      question: "Which type of joint is most suitable for constructing a strong, lightweight frame?",
      options: [
        "A. Mortise and tenon",
        "B. Butt joint",
        "C. Dado joint",
        "D. Lap joint"
      ],
      answer: "A. Mortise and tenon"
    },
    {
      id: 3,
      question: "In carpentry, what is the primary advantage of using a biscuit joiner?",
      options: [
        "A. It eliminates the need for clamps during gluing",
        "B. It allows for quick disassembly of parts",
        "C. It ensures precise alignment of wooden pieces",
        "D. It strengthens end-grain connections"
      ],
      answer: "C. It ensures precise alignment of wooden pieces"
    },
    {
      id: 4,
      question: "What is the critical factor to consider when selecting wood for outdoor furniture?",
      options: [
        "A. The color of the wood",
        "B. Its resistance to moisture and decay",
        "C. The ease of machining the wood",
        "D. Its availability in local markets"
      ],
      answer: "B. Its resistance to moisture and decay"
    },
    {
      id: 5,
      question: "Which of the following is the primary purpose of using a chisel bevel edge?",
      options: [
        "A. To create intricate carvings",
        "B. To produce clean, sharp corners in joinery",
        "C. To flatten and smooth wide surfaces",
        "D. To cut through metal components"
      ],
      answer: "B. To produce clean, sharp corners in joinery"
    },
    {
      id: 6,
      question: "What is the primary risk of using greenwood in structural projects?",
      options: [
        "A. Increased susceptibility to fire",
        "B. High chances of warping and cracking as it dries",
        "C. Difficulty in sanding and finishing",
        "D. Limited availability in the market"
      ],
      answer: "B. High chances of warping and cracking as it dries"
    },
    {
      id: 7,
      question: "Why is planing necessary before assembling wood components?",
      options: [
        "A. To reduce the weight of the wood",
        "B. To make the wood resistant to termites",
        "C. To ensure smooth surfaces for precise fitting",
        "D. To darken the color of the wood"
      ],
      answer: "C. To ensure smooth surfaces for precise fitting"
    },
    {
      id: 8,
      question: "What is the main disadvantage of using a brad nailer for wood joints?",
      options: [
        "A. It leaves visible holes that need filling",
        "B. It cannot penetrate hardwoods",
        "C. It weakens the wood's natural grain structure",
        "D. It is incompatible with glue-based joints"
      ],
      answer: "A. It leaves visible holes that need filling"
    },
    {
      id: 9,
      question: "In furniture making, why is quarter-sawn wood preferred for high-quality projects?",
      options: [
        "A. It is less expensive than other cuts",
        "B. It resists warping and shows uniform grain patterns",
        "C. It is easier to work with due to its softness",
        "D. It absorbs finishes more quickly"
      ],
      answer: "B. It resists warping and shows uniform grain patterns"
    },
    {
      id: 10,
      question: "When constructing a staircase, what is the function of the riser?",
      options: [
        "A. To support the weight of the tread",
        "B. To provide a vertical connection between treads",
        "C. To act as the base for handrails",
        "D. To enhance the aesthetic appeal of the staircase"
      ],
      answer: "B. To provide a vertical connection between treads"
    }
    
    // Add more questions as needed
  ]);
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [testEnded, setTestEnded] = useState(false);
  const [certificateReady, setCertificateReady] = useState(false); // To track whether certificate can be downloaded

  const downloadTriggered = useRef(false);  // Ref to track if download is triggered

  // Timer countdown logic
  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      setTestEnded(true);
    }
  }, [isStarted, timeLeft]);

  // Tab switch detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && isStarted) {
        alert("Tab switch detected! Test ended.");
        setTestEnded(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isStarted]);

  const handleAnswerChange = (questionId, option) => {
    setCurrentAnswers({ ...currentAnswers, [questionId]: option });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      if (currentAnswers[q.id] === q.answer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setTestEnded(true); // End the test and calculate score
    // Check if score is >= 50% (threshold for certificate generation)
    if (calculatedScore / questions.length >= 0.5) {
      setCertificateReady(true); // Set the flag to show the download button
    }
  };

  const handleRestart = () => {
    setName("");
    setIsStarted(false);
    setTimeLeft(600);
    setCurrentAnswers({});
    setScore(0);
    setTestEnded(false);
    setCertificateReady(false); // Reset certificate flag on restart
    downloadTriggered.current = false;  // Reset download flag on restart
  };

  const handleDownloadCertificate = () => {
    // Trigger certificate download only once using ref
    if (!downloadTriggered.current) {
      downloadTriggered.current = true;
    }
  };

  const renderQuestions = () =>
    questions.map((q) => (
      <div key={q.id} className="header">
        <p className="font-medium mb-2">{q.id}. {q.question}</p>
        {q.options.map((opt, index) => (
          <div key={index} className="header">
            <input
              type="radio"
              name={`question-${q.id}`}
              value={opt}
              onChange={() => handleAnswerChange(q.id, opt)}
              disabled={testEnded}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label className="ml-2">{opt}</label>
          </div>
        ))}
      </div>
    ));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Name Entry */}
      {!isStarted && !testEnded && (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Assessment Carpentry</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button
            onClick={() => {
              if (name.trim()) setIsStarted(true);
              else alert("Please enter your name to start.");
            }}
            className="block-btn"
          >
            Start Assessment
          </button>
        </div>
      )}

      {/* Assessment content */}
      {isStarted && !testEnded && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Assessment</h2>
            <p className="text-lg font-bold text-red-500">
              Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
            </p>
          </div>
          <form className="bg-white p-6 rounded-lg shadow-md">
            {renderQuestions()}
            <button
              type="button"
              onClick={handleSubmit}
              className="block-btn"
              disabled={Object.keys(currentAnswers).length < questions.length}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Result, Score and Certificate Download */}
      {testEnded && name && (
        <div className="mt-6">
          {/* Show score and message based on result */}
          <div className="text-center mt-4">
            {score / questions.length >= 0.5 ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Congratulations, {name}!</h1>
                <p>You passed the assessment with a score of {score}/{questions.length}!</p>
                {/* Show download button only if score >= 50% */}
                {certificateReady && (
                  <div className="mt-4">
                    {/* Certificate download button */}
                    <button
                      onClick={handleDownloadCertificate}
                      className="bg-green-500 block-btn"
                    >
                      Download Certificate
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-red-100 text-red-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Sorry, {name}!</h1>
                <p>You scored {score}/{questions.length}. Please try again.</p>
                <button
                  onClick={handleRestart}
                  className="bg-red-500 block-btn"
                >
                  Reattempt
                </button>
              </div>
            )}
          </div>
          {/* Trigger the certificate download after the button click */}
          {downloadTriggered.current && certificateReady && (
            <CertificateDownload name={name} certificateType="Carpentry" />
          )}
        </div>
      )}
    </div>
  );
};

export default AssessmentCarpentry;
