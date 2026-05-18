import { useState } from "react";
import API from "../services/api";

const Recommendation = () => {
  const [result, setResult] = useState("");

  const getAIRecommendation = async () => {
    const employee = {
      name: "Aman",
      performanceScore: 85,
      skills: ["React", "Node"]
    };

    const res = await API.post("/ai/recommend", {
      employee
    });

    setResult(res.data.recommendation);
  };

  return (
    <div>
      <button onClick={getAIRecommendation}>
        Get AI Recommendation
      </button>

      <p>{result}</p>
    </div>
  );
};

export default Recommendation;